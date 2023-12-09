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
    backgroundColor: colors.black,
    borderWidth: 10,
    borderColor: colors.secondary,
    borderRadius: 10,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default BorderScreen;
