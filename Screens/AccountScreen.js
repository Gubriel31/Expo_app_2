import { View, Text } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Account
      </Text>

      <Text style={GlobalStyle.subtitle}>
        Manage your account settings
      </Text>

    </View>
  );
};

export default AccountScreen;