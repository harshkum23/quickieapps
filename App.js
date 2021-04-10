import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "./screen/OnboardingScreen";
import LoginScreen from "./screen/LoginScreen";
import AsyncStorage from '"@react-native-community/asyn-storage';
const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001F",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    height: 40,
    width: 40,
  },
  welcome: {
    textalign: "Left",
    fontSize: 8,
    letterSpacing: 0.1,
    color: "#A7A7A7",
    opacity: 1,
    font: 13,
  },
  input: {
    top: 324,
    left: 50,
    width: 123,
    height: 12,
    textalign: "Left",
    fontSize: 8,
    letterSpacing: 0.1,
    color: "#A7A7A7",
    opacity: 1,
    padding: 10,
  },

  touch: {
    width: "20%",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#5098F2",
  },
  touch1: {
    fontSize: 8,
    justifyContent: "center",
    color: "#A7A7A7",
    marginBottom: 20,
  },
  forgot_button: {
    textalign: "Left",
    height: 30,
    fontSize: 8,
    color: "#A7A7A7",
  },

  welcome1: {
    fontSize: 8,
    letterSpacing: 0.1,
    color: "#A7A7A7",
    opacity: 1,
    font: 13,
  },
});
