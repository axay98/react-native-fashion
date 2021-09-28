import React from "react";
import { Image, Text, View } from "react-native";

const assets = [
  require("../../assets/Google__G__Logo.svg.png"),
  require("../../assets/apple.png"),
  require("../../assets/fb.png"),
];
const SocialIcon = ({ children }) => {
  return (
    <View
      style={{
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 44,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image style={{ width: 30, height: 30 }} source={children} />
    </View>
  );
};
const SocialLogin = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <SocialIcon children={assets[0]} />
      <SocialIcon children={assets[1]} />
      <SocialIcon children={assets[2]} />
    </View>
  );
};
export default SocialLogin;
