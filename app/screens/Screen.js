import React from "react";

import { View, StatusBar } from "react-native";

import IconReuse from "../components/IconReuse";
import ListItem from "../components/ListItem";

function Screen(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: StatusBar.currentHeight,
        marginLeft: 10,
      }}
    >
      {/* <IconReuse
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white"
      ></IconReuse> */}
      <ListItem
        title="My Title"
        subTitle="My Subtitle is here"
        ImageComponent={<IconReuse name="email" size={50} />}
      />
    </View>
  );
}

export default Screen;
