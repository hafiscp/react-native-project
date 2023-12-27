import React from "react";

import { View, StatusBar } from "react-native";

import IconReuse from "../components/IconReuse";
import ListItem from "../components/ListItem";

function Screen(props) {
  return (
    <View style={{ flexDirection: "row", paddingTop: StatusBar.currentHeight }}>
      <IconReuse
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white"
      ></IconReuse>
      <ListItem title="hello" />
    </View>
  );
}

export default Screen;
