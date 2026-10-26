import HomeScreen from './Screens/HomeScreen';
import BookScreen from './Screens/BookScreen';
import SettingsScreen from './Screens/SettingsScreen';
import AboutUs from './Screens/AboutUs';
import MyBookingsScreen from './Screens/MyBookingsScreen';
import ChatScreen from './Screens/ChatScreen';
import AccountScreen from './Screens/AccountScreen';
import NotificationsScreen from './Screens/NotificationsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Home: focused ? 'home' : 'home-outline',
            Book: focused ? 'book' : 'book-outline',
            AIChat: focused
              ? 'chatbubble-ellipses'
              : 'chatbubble-ellipses-outline',
            Settings: focused ? 'settings' : 'settings-outline',
          };

          return (
            <Ionicons
              name={icons[route.name]}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Book" component={BookScreen} />
      <Tab.Screen
        name="AIChat"
        component={ChatScreen}
        options={{ title: 'AI Chat' }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ title: 'About Us' }}
        />

        <Stack.Screen
          name="MyBookings"
          component={MyBookingsScreen}
          options={{ title: 'My Bookings' }}
        />

        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ title: 'Account Settings' }}
        />

        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ title: 'Notification Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}