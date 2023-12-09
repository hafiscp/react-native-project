import React from "react";
import { StyleSheet, Text} from "react-native";

function MyAppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "800",
    color: "red",
  },
});

export default MyAppText;
