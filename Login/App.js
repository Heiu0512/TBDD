import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./Screen/Login";
import Dki from "./Screen/Dki";
import ForgetMK from "./Screen/ForgetMK";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Dki} />
        <Stack.Screen name="Register" component={ForgetMK} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
