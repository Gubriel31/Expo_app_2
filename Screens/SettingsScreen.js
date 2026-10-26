import { View, Text, Pressable } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Settings
      </Text>

      <Text style={GlobalStyle.subtitle}>
        Manage your preferences
      </Text>

      {/* NOTIFICATIONS */}
      <Pressable
        style={GlobalStyle.card}
        onPress={() => navigation.navigate('Notifications')}
      >
        <Text style={GlobalStyle.cardTitle}>
          Notifications
        </Text>

        <Text style={GlobalStyle.text}>
          Manage your notification settings.
        </Text>
      </Pressable>

      {/* ACCOUNT */}
      <Pressable
        style={GlobalStyle.card}
        onPress={() => navigation.navigate('Account')}
      >
        <Text style={GlobalStyle.cardTitle}>
          Account
        </Text>

        <Text style={GlobalStyle.text}>
          Manage your account settings.
        </Text>
      </Pressable>

      {/* BACK TO HOME */}
      <Pressable
        style={GlobalStyle.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={GlobalStyle.buttonText}>
          Back to Home
        </Text>
      </Pressable>

    </View>
  );
};

export default SettingsScreen;