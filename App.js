import React from "react";
import { StyleSheet, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import BorderScreen from "./app/screens/BorderScreen";
import AppText from "./app/screens/AppText";
import IconImport from "./app/screens/IconImport";
import AppButton from "./app/components/AppButton";
import Card from "./app/screens/Card";

export default function App() {
  return (
    <View style={styles.views}>
      <Card
        title="Mountains for Sale !"
        subTitle="$100"
        image={require("./app/assets/bg.jpg")}
      />
      <Card
        title="Mountains for Sale !"
        subTitle="$100"
        image={require("./app/assets/bg.jpg")}
        
      />
    </View>
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
  views: {
    padding: 20,
    margin: 10,
    paddingTop: 80,
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
