import React from "react";
import FormInput from "../component/Forminput";
import FormInput from "../component/Formbutton";

import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import formbutton from "../navigation/component/formbutton";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        labelValue={username}
        onChangeText={(username) => setPassword(username)}
        placeholderText="username"
        keyboardType="username"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={email}
        onChangeText={(useremail) => setPassword(useremail)}
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={passsword}
        onChangeText={(userPasswprd) => setPassword(userPasswprd)}
        placeholderText="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.forgotButtom} onPress={() => []}>
        <Text style={styles.navButtonText}>Forgot password</Text>
      </TouchableOpacity>

      <Formbutton
        buttonTitle=" Sign up"
        onPress={() => alert("Sign Up Clicked")}
      />
      <TouchableOpacity
        style={styles.forgotButtom}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.navButtonText}>have an account?Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001F",
    alignItems: "center",
    justifyContent: "center",
  },
  
  navButtonText: {
    textalign: "Left",
    fontSize: 8,
    letterSpacing: 0.1,
    color: "#A7A7A7",
    opacity: 1,
    font: 13,
  },
});
