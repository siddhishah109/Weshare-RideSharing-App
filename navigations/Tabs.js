import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Button } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen1 from '../screens/ProfileScreen1';
import FavouriteScreen from '../screens/FavouriteScreen';
import HistoryScreen from '../screens/HistoryScreen';
import WalletScreen from '../screens/WalletScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen1} options={{ headerShown: false }} />
        <Tab.Screen name="Favourite" component={FavouriteScreen} options={{ headerShown: false }} />
        <Tab.Screen name="History" component={HistoryScreen} options={{ headerShown: false }}  />
        <Tab.Screen name="Wallet" component={WalletScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default Tabs
