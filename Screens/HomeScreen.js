
import { View, Text, Pressable } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Your awesome booking app
      </Text>

      <Text style={GlobalStyle.subtitle}>
        Welcome to your awesome app
      </Text>

      <View style={GlobalStyle.card}>
        <Text style={GlobalStyle.cardTitle}>
          About our app
        </Text>

        <Text style={GlobalStyle.text}>
          Here you can book your reservations and manage
          your account settings. Enjoy a seamless experience
          with our user-friendly interface.
        </Text>
      </View>

      <Pressable
        style={GlobalStyle.button}
        onPress={() => navigation.navigate('Book')}
      >
        <Text style={GlobalStyle.buttonText}>
          Book a reservation
        </Text>
      </Pressable>

      <Pressable
        style={GlobalStyle.button}
        onPress={() => navigation.navigate('AIChat')}
      >
        <Text style={GlobalStyle.buttonText}>
          AI Booking Assistant
        </Text>
      </Pressable>

      <Pressable
        style={GlobalStyle.button}
        onPress={() => navigation.navigate('AboutUs')}
      >
        <Text style={GlobalStyle.buttonText}>
          About Us
        </Text>
      </Pressable>

      <Pressable
        style={GlobalStyle.button}
        onPress={() => navigation.navigate('MyBookings')}
      >
        <Text style={GlobalStyle.buttonText}>
          My Bookings
        </Text>
      </Pressable>

    </View>
  );
};

export default HomeScreen;
