import React from "react";
import { Text, View } from "react-native";
import RoundedIcon from "./RoundedIcon";
import { RectButton } from "react-native-gesture-handler";
const DrawerItem = ({ navigation, icon, color, screen, label }) => {
  return (
    <RectButton
      onPress={() => navigation.navigate(screen)}
      style={{ borderRadius: 10 }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", padding: 8 }}>
        <RoundedIcon
          name={icon}
          size={40}
          backgroundColor={color}
          color={"white"}
        />
        <Text
          style={{
            fontSize: 15,
            color: "black",
            textAlign: "center",
            fontFamily: "sf-pro-regular",
            marginLeft: 15,
          }}
        >
          {label}
        </Text>
      </View>
    </RectButton>
  );
};

export default DrawerItem;
