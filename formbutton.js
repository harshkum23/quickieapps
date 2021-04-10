import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowheight } from "../../utils/Dimension";
const formbutton = ({ btn1, ...rest }) => {
  return (
    <TouchableOpacity styles={styles.button} {...rest}>
      <Text style={welcome}></Text>
    </TouchableOpacity>
  );
};
export default formbutton;


  const styles = StyleSheet.create({
    button: {
        marginTop:10,
        width:'100%',
        height:windowheight/15,
        padding:10,
        borderRadius:3,
      flex: 1,
      backgroundColor: '#24244B',
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
  

