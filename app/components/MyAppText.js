import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

function MyAppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Anveir",
    fontSize: 18,
    fontWeight: "800",
    color: "red",
  },
});

export default MyAppText;
