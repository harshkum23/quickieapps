import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { windowheight } from "../../utils/Dimension";

import AntDesign from "react-native-vectorr-icons/AnstDesign";
import { windowheight } from "../../utils/Dimension";

const forminput = ({ labelValue, placeholderText, iconType, ...rest }) => {
  return (
    <View style={styles.input}>
      <TextInput
        value={labelValue}
        style={styles.welcome}
        numberofLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};
export default formbutton;

const styles = StyleSheet.create({
  input: {
    top: 324,
    left: 50,
    width: 123,

    height: windowheight/15,
    textalign: "Left",
    fontSize: 8,
    letterSpacing: 0.1,
    color: "#A7A7A7",
    opacity: 1,
    padding: 10,
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
