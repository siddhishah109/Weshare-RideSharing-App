import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {  View, Text } from 'react-native';
import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen1 from "./screens/LoginScreen1";
import LoginScreen from './screens/LoginScreen';
import HomeScreen from "./screens/HomeScreen";
import CreateAccountScreen from './screens/CreateAccountScreen';
import ProfileScreen from './screens/ProfileScreen';
import Tabs from './navigations/Tabs';
import NotificationScreen from './screens/NotificationScreen';
import GroupScreen from './screens/GroupFormation';
import GroupSelectionScreen from './screens/GroupSelection';
import TopAppBar from './components/TopAppBar';
import ThankyouScreen from './screens/ThankyouScreen';
import RiderLogin from './screens/RiderLogin';
import RiderScreen from './screens/RiderScreen';
import PreferenceScreen from './screens/PreferenceScreen';
const Stack = createNativeStackNavigator();
 

export default function App() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOnboardingCompletion = () => {
    setIsOnboardingCompleted(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
     <Stack.Navigator>
     
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
       
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeTabs"  options={{ header: (props) => <TopAppBar {...props} />}} component={Tabs}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginScreen1" component={LoginScreen1} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="GroupScreen" component={GroupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="GroupSelectionScreen" component={GroupSelectionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ThankyouScreen" component={ThankyouScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RiderLogin" component={RiderLogin} options={{ headerShown: false }}/>
        <Stack.Screen name="PreferenceScreen" component={PreferenceScreen} options={{headerShown: false }}/>
        <Stack.Screen name="RiderScreen" component={RiderScreen} options={{ header: (props) => <TopAppBar {...props} />}}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}