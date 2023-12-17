import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/hafis.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/hafis.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item.id)}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  handleDelete(item);
                }}
              />
            )}
            // renderLeftActions={() => <ListItemDeleteAction />}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        // refreshing={refreshing}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MessageScreen;
