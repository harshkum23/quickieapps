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
      <Image style={styles.image} source={require("./assets/logo.png")} />
      <Text style={style.welcome}>Email</Text>
      <FormInput
        labelValue={email}
        onChangeText={(useremail) => setPassword(useremail)}
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={email}
        onChangeText={(userPasswprd) => setPassword(userPasswprd)}
        placeholderText="Password"
        keyboardType="email-address"
        secureTextEntry={true}
        
      />
  <TouchableOpacity style={styles.forgotButtom} onPress={()=>[]}>
          <Text style={styles.navButtonText}>Forgot password</Text>
        </TouchableOpacity>
        
      <Formbutton
        buttonTitle='Log In'
        onPress={()=>alert('Log in Clicked')}
        />
        <TouchableOpacity style={styles.forgotButtom}
         onPress={()=>navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}>Don't have an account? Create one 
          </Text>
        </TouchableOpacity>
        


    </View>
  );
};

export default LoginScreen;
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
});
