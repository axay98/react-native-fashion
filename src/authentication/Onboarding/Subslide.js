import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../Components/Button";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontFamily: "sf-pro-semibold",
    fontSize: 24,
    color: "#0C0D34",
    textAlign: "center",
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,

    fontFamily: "sf-pro-regular",
  },
});
const Subslide = ({ subtitle, description, last, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
