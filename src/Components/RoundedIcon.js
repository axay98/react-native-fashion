import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Text, View } from "react-native";
const RoundedIcon = ({ name, size, color, backgroundColor }) => {
  return (
    <View
      style={{
        //   marginBottom: 20,
        //   marginTop: 20,
        //   marginLeft: 10,
        //   marginRight: 10,
        backgroundColor: backgroundColor,
        width: size,
        height: size,
        borderRadius: 44,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: color }}>
        <Icon name={name} size={18} />
      </Text>
    </View>
  );
};
export default RoundedIcon;
