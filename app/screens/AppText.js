import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MyAppText from "../components/MyAppText/MyAppText";
import colors from "../config/colors";

function AppText({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    // paddingTop: 10,
    // marginLeft: 20,
  },
  title: {
    fontSize: 20,
    // paddingTop: 10,
    // paddingVertical: 5,
    fontWeight: "600",
  },
});

export default AppText;
