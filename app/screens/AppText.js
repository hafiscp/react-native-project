import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MyAppText from "../components/MyAppText/MyAppText";
import colors from "../config/colors";

function AppText({ title, subTitle }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: 10,
    marginLeft: 20,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    paddingTop: 10,
    paddingVertical: 5,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "700",
    fontSize: 18,
  },
});

export default AppText;
