import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen() {
    return (
        <ImageBackground style={styles.background} source={require('../assets/bg.jpg')}>
            <View style={styles.loginContainer}>
                <ImageBackground source={require('../assets/splash.png')} style={styles.logo}></ImageBackground>
                <Text>The Perfect Place for App Development</Text>
            </View>
            <View style={styles.loginButton}></View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logo:{
        width:"100%",
        height:"100%",
    },
    loginContainer:{
        position: "absolute",
        top: 100,
        alignItems:"center"
    },
    loginButton: {
        width: "100%",
        height: 100,
        backgroundColor: "#ff0012",
    }
})

export default WelcomeScreen;