import React from "react";
import { StyleSheet, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import BorderScreen from "./app/screens/BorderScreen";
import AppText from "./app/screens/AppText";
import IconImport from "./app/screens/IconImport";
import AppButton from "./app/components/AppButton";
import Card from "./app/screens/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";

export default function App() {
  return (
    <MessageScreen />
    // <View style={styles.ListingContainer}>
    //   <ListingDetailsScreen
    //     image={require("./app/assets/bg.jpg")}
    //     title="Product #01"
    //     subTitle="$100"
    //   />
    // </View>
    // <View style={styles.views}>
    //   <Card
    //     title="Mountains for Sale !"
    //     subTitle="$100"
    //     image={require("./app/assets/bg.jpg")}
    //   />
    //   <Card
    //     title="Mountains for Sale !"
    //     subTitle="$100"
    //     image={require("./app/assets/bg.jpg")}

    //   />
    // </View>
    // <ViewImageScreen />
    // <BorderScreen />
    // <IconImport />
    // <AppText />
    // <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 100,
  },
  ListingContainer: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
  views: {
    padding: 20,
    margin: 10,
    paddingTop: 80,
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
