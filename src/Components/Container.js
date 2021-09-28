import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
const assets = [
  require("../../assets/pattern1.png"),
  require("../../assets/pattern2.png"),
  require("../../assets/pattern3.png"),
];

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
const Container = ({ children, footer, pattern }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0C0d34" }}>
      <StatusBar barStyle="light-content" />
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            //   borderTopLeftRadius: 75,
            overflow: "hidden",
            height: height * 0.61,
            borderBottomLeftRadius: 75,
          }}
        >
          <Image
            source={assets[pattern]}
            style={{ width: width, height: height, borderBottomLeftRadius: 75 }}
          />
        </View>
      </View>
      <View style={{ flex: 1, overflow: "hidden" }}>
        <Image
          source={assets[pattern]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: width,
            height: height,
            borderBottomLeftRadius: 75,
            top: -height * 0.61,
          }}
        />
        <View
          style={{
            borderRadius: 75,
            borderTopLeftRadius: 0,
            backgroundColor: "white",
            flex: 1,
          }}
        >
          {children}
        </View>
      </View>
      <View style={{ height: 150, backgroundColor: "#0C0d34" }}>{footer}</View>
    </View>
  );
};
export default Container;
