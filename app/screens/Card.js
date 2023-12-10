import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={image} style={styles.image} />
      <AppText title={title} subTitle={subTitle} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: 250,
  },
});

export default Card;
