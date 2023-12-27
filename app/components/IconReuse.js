import React from "react";
import { View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconReuse({
  name,
  size = 50,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 0.5,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size / 2}
        backgroundColor
        color={iconColor}
      />
    </View>
  );
}

export default IconReuse;
