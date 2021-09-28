import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
  container: {
    width: width,
  },
  titleContainer: {
    backgroundColor: "red",
    height: 100,
    justifyContent: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    // top: height - height * 0.61,
    borderBottomRightRadius: 75,
    width: undefined,
    height: undefined,
  },
  title: {
    fontSize: 80,
    fontFamily: "sf-pro-bold",
    color: "white",
    lineHeight: 80,
    textAlign: "center",
  },
});
const Slide = ({ label, right, picture }) => {
  const transform = [
    {
      translateY: (SLIDE_HEIGHT - 100) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={(styles.titleContainer, { transform })}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;
