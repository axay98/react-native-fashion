import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import RoundedIcon from "./RoundedIcon";
const Header = ({ navigation }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,

        right: 0,
        left: 0,

        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 30,
      }}
    >
      <TouchableOpacity
        style={{ marginLeft: 5 }}
        onPress={() => navigation.openDrawer()}
      >
        <RoundedIcon
          size={24}
          name="menu"
          color="black"
          backgroundColor="white"
        />
      </TouchableOpacity>

      <Text style={{ color: "black", fontSize: 18 }}>OUTFIT IDEAS</Text>
      <TouchableOpacity
        style={{ marginRight: 5 }}
        onClick={() => alert("hello")}
      >
        <RoundedIcon
          size={24}
          name="shopping-bag"
          color="black"
          backgroundColor="white"
          onClick={() => alert("hello")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
