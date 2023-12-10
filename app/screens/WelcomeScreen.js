import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.loginContainer}>
        <ImageBackground
          source={require("../assets/splash.png")}
          style={styles.logo}
        ></ImageBackground>
        <Text style={styles.tagline}>
          The Perfect Place for App Development
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => {
            console.log("Login Tapped");
          }}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => {
            console.log("Register Tapped");
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  loginContainer: {
    top: 100,
    position: "absolute",
    alignItems: "center",
  },
  tagline: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: 20,
  },
});

export default WelcomeScreen;
