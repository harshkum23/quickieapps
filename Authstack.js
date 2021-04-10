import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "./screen/OnboardingScreen";
import LoginScreen from "./screen/LoginScreen";
import AsyncStorage from '"@react-native-community/asyn-storage';
import SignupScreen from "../screen/SignupScreen";
const AppStack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        option={{ header: () => null }}
      />
      <Stack.Screen
        name="Create Account"
        component={SignupScreen}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "blue",
            shadowColor:'darkblue',
            elevation:0,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
