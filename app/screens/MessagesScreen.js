import React, { Component, useState } from "react";
import { FlatList, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/screen";
import ListItemSeparator from "../components/lists/ListItemSepartor";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const intialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title:
      "hello haplapdpskdskdpsfdkdpfkdpfkdpfkpdkfpkgpfkgpfkgpfkgpfkgpfkgpfkpgkfpgkfpgkfpgkfpgkpfkgpfkgpfkgpfkgpfkpgkfpkgpfkpgkfpgkfpkgpfkgpfkgkfpgpfkgpfkgpfkgpkfpgkfpgfpgkfpgkpfkgpfk",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen(props) {
  const [messages, setMessages] = useState(intialMessages);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("messaege select", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
