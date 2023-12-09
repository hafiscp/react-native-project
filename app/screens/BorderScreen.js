import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";

function BorderScreen(props) {
  return (
    // <View style={styles.container}>
    //   <View style={styles.borders}></View>
    // </View>
    <View style={styles.container}>
      <Text style={styles.textstyles}>
        I love react native ! And, This is my first app made in complete react
        native. As a beginner, I've a lot of enthusiasm and eager to try and
        learn how to build and succeed in developing such skill.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  borders: {
    width: 100,
    height: 100,
    backgroundColor: colors.primary,
    shadowColor: colors.primary, //iOS
    shadowOffset: { width: 100, height: 100 }, //iOS
    shadowOpacity: 1, //iOS
    shadowRadius: 10, //iOS
    elevation: 20, //Android
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textstyles: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "600",
    textAlign: "center",
    color: colors.secondary,
    textTransform: "capitalize",
    textDecorationLine: "underline",
  },
});

export default BorderScreen;
