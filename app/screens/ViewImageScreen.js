import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        source={require("../assets/bg.jpg")}
        style={styles.viewimg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 60,
    height: 30,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 60,
    height: 30,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  viewimg: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
