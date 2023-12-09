import { StyleSheet, Platform } from "react-native";

ImageComponent;

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Anveir",
    fontSize: 18,
    fontWeight: "800",
    color: "red",
  },
});

export default styles;
