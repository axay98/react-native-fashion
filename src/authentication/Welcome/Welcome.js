import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../../Components/Button";
const picture = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 5074,
};
const styles = StyleSheet.create({
  imagecontainer: {
    flex: 1,
    borderBottomRightRadius: 75,
    backgroundColor: "rgba(12,13,52,0.05)",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  subtitle: {
    fontFamily: "sf-pro-bold",
    fontSize: 26,
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
    // marginBottom: 40,

    fontFamily: "sf-pro-regular",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    // top: height - height * 0.61,
    borderBottomRightRadius: 75,
    width: undefined,
    height: undefined,
  },
});
const Welcome = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.imagecontainer}>
        <Image source={picture.src} style={styles.picture} />
      </View>
      <View style={{ flex: 1, borderTopLeftRadius: 75 }}>
        <View
          style={{
            backgroundColor: "rgba(12,13,52,0.05)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <View
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 75,
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: 40,
          }}
        >
          <Text style={styles.subtitle}>Let's get started</Text>
          <Text style={styles.description}>
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            variant="default"
            label="Join us, it's Free"
            onPress={() => navigation.navigate("Register")}
          />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
