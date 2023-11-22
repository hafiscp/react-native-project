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
        alignContent: "center", // Entire Content
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100, //set the width to 300
          // flexBasis: 100, // Alike flex. Value will be 100.
          // flexGrow: 1, // If side is empty, it'll automatically fill with the existing view.
          // flexShrink: 1, // If the view is in overflow, the flexShrink will be restrict the growth of overflowing view.
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 0,
          left: 0,
          position: "absolute",
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
