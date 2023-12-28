import React from "react";

import { View, StatusBar, Platform, StyleSheet } from "react-native";

import IconReuse from "../components/IconReuse";
import ListItem from "../components/ListItem";

function Screen(props) {
  return (
    <View
      style={styles.screen}
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
      <ListItem
        title="My Title"
        subTitle="My Subtitle is here"
        ImageComponent={<IconReuse name="email" size={50} />}
      />
      <ListItem
        title="My Title"
        subTitle="My Subtitle is here"
        ImageComponent={<IconReuse name="email" size={50} />}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  screen : {
    flexDirection: Platform==="android" ? "row":"",
    paddingTop: Platform==="android" ? StatusBar.currentHeight : 60,
    marginLeft: 10,
  }
})

export default Screen;
