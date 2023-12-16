import React from "react";

import { StyleSheet, View } from "react-native";

function ListItemSeparator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: "#f8f4f4",
  },
});

export default ListItemSeparator;
