import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import AppText from "./AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ image, title, subTitle }) {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.headContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <ListItem
        image={require("../assets/hafis.jpg")}
        title="Hafis CP"
        subTitle="5 Listing"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.secondary,
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 18,
  },
});

export default ListingDetailsScreen;
