import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Background = () => {
  return (
    <View style={{ ...StyleSheet.absoluteFill }}>
      <View style={{ flex: 1 / 3, backgroundColor: "lightBlue" }}>
        <View
          style={{ flex: 1 / 3, backgroundColor: "white", borderBottom: 40 }}
        />
      </View>
      <View style={{ flex: 1 / 3 }}>
        <View style={{ flex: 1, backgroundColor: "white" }} />
        <View style={{ flex: 1, backgroundColor: "#0C0D34" }} />
        <Image
          source={require("../../assets/background.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        />
      </View>
      <View style={{ flex: 1 / 3, backgroundColor: "lightblue" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#0C0D34",
            borderTopLeftRadius: 40,
          }}
        ></View>
      </View>
    </View>
  );
};
export default Background;
