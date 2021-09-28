import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    borderRadius: 70,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "sf-pro-regular",
    fontSize: 15,
    textAlign: "center",
  },
});
const Button = ({ variant, label, onPress }) => {
  const backgroundColor =
    variant === "primary"
      ? "#2CB9B0"
      : variant === "default"
      ? "rgba(12,13,52,0.05)"
      : "rgba(12,13,52,0.0)";
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton
      style={[styles.container, { backgroundColor: backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color: color }]}>{label}</Text>
    </RectButton>
  );
};
export default Button;
