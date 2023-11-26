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
        flex: 2,
        backgroundColor: "grey",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></View>
    </View>
  );
}
