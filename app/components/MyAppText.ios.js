import React from "react";
import { StyleSheet, Text } from "react-native";

function MyAppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Anveir",
    fontSize: 20,
    fontWeight: "800",
    color: "blue",
  },
});

export default MyAppText;
