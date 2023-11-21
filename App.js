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
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // Horizontal
        justifyContent: "center", // Main - Primary Axis
        alignItems: "center", // Secondary Axis
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 200,
          alignSelf: "flex-end",
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 150,
          alignSelf: "flex-start",
        }}
      />
    </View>
  );
}
