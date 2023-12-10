import React from "react";
import { StyleSheet, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import BorderScreen from "./app/screens/BorderScreen";
import AppText from "./app/screens/AppText";
import IconImport from "./app/screens/IconImport";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <View style={styles.view}>
      <AppButton
        title="Login"
        onPress={() => {
          console.log("Tapped");
        }}
      />
    </View>
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <BorderScreen />
    // <IconImport />
    // <AppText />
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
