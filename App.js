import React from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Button,
  Platform,
  View,
  Dimensions,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("window"));
  console.log(Dimensions.get("screem"));
  // Dimensions returns the dimensions of screen or window. It has the width, height, and scale factor of the device.
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerBlue",
          width: "50%",
          height: 70,
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
