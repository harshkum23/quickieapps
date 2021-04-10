import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigation("Login")}
      pages={[
        {
          backgroundColor: "#00001F",
          image: <Image source={require("../assets/logo.png")} />,
        },
      ]}
    />
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001F",
    alignItems: "center",
    justifyContent: "center",
  },
});
