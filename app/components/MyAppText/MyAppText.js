import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

import styles from "./styles";

function MyAppText({ children, title }) {
  return <Text style={styles.text}>{(children, title)}</Text>;
}

export default MyAppText;
