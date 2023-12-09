import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function BorderScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.borders}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  borders: {
    width: 100,
    height: 100,
    backgroundColor: colors.primary,
    shadowColor: colors.primary, //iOS
    shadowOffset: { width: 100, height: 100 }, //iOS
    shadowOpacity: 1, //iOS
    shadowRadius: 10, //iOS
    elevation: 20, //Android
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default BorderScreen;
