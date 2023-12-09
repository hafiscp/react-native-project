import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MyAppText from "../components/MyAppText/MyAppText";

function AppText() {
  return (
    <View style={styles.container}>
      <MyAppText>Hello, I'm Hafis CP</MyAppText>
      <Text style={styles.newtext}>Hello, Its another Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  newtext: {
    color: "blue",
    fontWeight: "600",
    fontSize: 12,
    backgroundColor: "yellow",
    margin: 15,
    padding: 20,
  },
});

export default AppText;
