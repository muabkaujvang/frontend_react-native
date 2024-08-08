// components/Button.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors"; // Adjust the path if needed

const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Button;
