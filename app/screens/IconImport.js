import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconImport(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons style={styles.icons} size={100} name="email" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  icons: {
    color: "dodgerblue",
  },
});
export default IconImport;
