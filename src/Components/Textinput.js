import React from "react";
import { TextInput as RNTextINput, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
const Textinput = (icon, placeholder) => {
  return (
    <View style={{ flexDirection: "row", alignCenter: "center" }}>
      <Icon name={icon} />
      <RNTextINput placeholder={placeholder} />
    </View>
  );
};

export default Textinput;
