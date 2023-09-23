import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Button Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texts} onPress={handlePress}>
        Hello World !
      </Text>
      {/* Touchables Starts */}
      <TouchableWithoutFeedback onPress={() => console.log("Image Tapped")}>
        <Image style={styles.img} source={require("./assets/icon.png")} />
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image style={styles.img} source={require("./assets/icon.png")} />
      </TouchableOpacity>
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image style={styles.img} source={require("./assets/icon.png")} />
      </TouchableHighlight>
      <TouchableNativeFeedback onPress={() => console.log("Image Tapped")}>
        <View
          style={{ width: 100, height: 70, backgroundColor: "tomato" }}
        ></View>
      </TouchableNativeFeedback>
      {/* Touchables Ends */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  texts: {
    padding: 10,
    color: "white",
    backgroundColor: "red",
    borderRadius: 100,
  },
  img: {
    height: 100,
    width: 100,
  },
});
