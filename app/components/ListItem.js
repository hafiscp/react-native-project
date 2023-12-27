import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

import colors from "../config/colors";

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.ListItemContainer}>
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.personal}>
              <Text style={styles.title}>{title}</Text>
              {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    shadowColor: colors.black,
    borderRadius: 35,
  },
  ListItemContainer: {
    // padding: 15,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: colors.white,
  },
  personal: {
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
  },
});

export default ListItem;
