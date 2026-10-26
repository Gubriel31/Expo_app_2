import { View, Text } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Notifications
      </Text>

      <Text style={GlobalStyle.subtitle}>
        Manage your notification settings
      </Text>

    </View>
  );
};

export default NotificationsScreen;