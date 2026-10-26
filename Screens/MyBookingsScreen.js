
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import styles from "../styles/GlobalStyle";
import { rtdb } from "../database/firebase";

import {
  ref,
  push,
  update,
  remove,
  onValue,
} from "firebase/database";

export default function MyBookingsScreen() {
  const [bookings, setBookings] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [editingId, setEditingId] = useState(null);

  // READ: Hent bookinger fra Firebase
  useEffect(() => {
    const bookingsRef = ref(rtdb, "Bookings");

    const unsubscribe = onValue(
      bookingsRef,
      (snapshot) => {
        const data = snapshot.val();

        if (data) {
          const bookingList = Object.entries(data).map(
            ([id, booking]) => ({
              id,
              ...booking,
            })
          );

          setBookings(bookingList);
        } else {
          setBookings([]);
        }
      },
      (error) => {
        Alert.alert("Firebase fejl", error.message);
      }
    );

    return () => unsubscribe();
  }, []);

  // CREATE og UPDATE: Gem booking i Firebase
  const saveBooking = async () => {
    if (!title.trim() || !date.trim()) {
      Alert.alert("Fejl", "Udfyld både navn og dato");
      return;
    }

    try {
      const bookingData = {
        title: title.trim(),
        date: date.trim(),
      };

      if (editingId !== null) {
        await update(
          ref(rtdb, `Bookings/${editingId}`),
          bookingData
        );

        setEditingId(null);
      } else {
        await push(
          ref(rtdb, "Bookings"),
          bookingData
        );
      }

      setTitle("");
      setDate("");
    } catch (error) {
      Alert.alert("Fejl", error.message);
    }
  };

  // Vælg booking til redigering
  const editBooking = (booking) => {
    setTitle(booking.title);
    setDate(booking.date);
    setEditingId(booking.id);
  };

  // DELETE: Slet booking fra Firebase
  const deleteBooking = async (id) => {
    try {
      await remove(ref(rtdb, `Bookings/${id}`));

      if (editingId === id) {
        setEditingId(null);
        setTitle("");
        setDate("");
      }
    } catch (error) {
      Alert.alert("Fejl", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mine bookinger</Text>

      <TextInput
        style={styles.input}
        placeholder="Hvor har du booket?"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Dato og tidspunkt"
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={saveBooking}
      >
        <Text style={styles.buttonText}>
          {editingId !== null
            ? "Gem ændringer"
            : "Tilføj booking"}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Du har ingen bookinger endnu.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.bookingCard}>
            <View style={styles.bookingInfo}>
              <Text style={styles.bookingTitle}>
                {item.title}
              </Text>

              <Text style={styles.bookingDate}>
                {item.date}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => editBooking(item)}
            >
              <Text style={styles.edit}>Rediger</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => deleteBooking(item.id)}
            >
              <Text style={styles.delete}>Slet</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
