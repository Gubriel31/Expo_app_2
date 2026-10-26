import { View, Text, SectionList, Pressable, Alert } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { CITIES } from "../data/const";

import { rtdb } from "../database/firebase";
import { ref, push } from "firebase/database";

const BookScreen = () => {

  // Gem den valgte by i Firebase
  const bookCity = async (city) => {
    try {
      const bookingData = {
        title: city,
        date: "Not specified",
      };

      await push(ref(rtdb, "Bookings"), bookingData);

      Alert.alert(
        "Booking saved!",
        `${city} has been added to My Bookings. You can view your bookings in the My Bookings section and add a date if you wish.`,
      );

    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Book a reservation
      </Text>

      <Text style={GlobalStyle.subtitle}>
        Here you can see the list of all of the cities you can book reservations in.
      </Text>

      <Text style={GlobalStyle.subtitle}>
        We have {CITIES.length} countries.
      </Text>

      <SectionList
        sections={CITIES}

        keyExtractor={(item, index) => item + index}

        renderSectionHeader={({ section }) => (
          <Text style={GlobalStyle.cardTitle}>
            {section.title}
          </Text>
        )}

        renderItem={({ item }) => (
          <Pressable
            style={GlobalStyle.listItem}
            onPress={() => bookCity(item)}
          >
            <Text style={GlobalStyle.text}>
              {item}
            </Text>
          </Pressable>
        )}

      />

    </View>
  );
};

export default BookScreen;