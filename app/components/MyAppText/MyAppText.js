import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

import styles from "./styles";

function MyAppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default MyAppText;
