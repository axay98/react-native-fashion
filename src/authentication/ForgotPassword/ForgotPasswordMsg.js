import React, { useState } from "react";
import { Text, TextInput, View, CheckBox } from "react-native";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import SocialLogin from "../../Components/SocialLogin";
import { Feather as Icon } from "@expo/vector-icons";

const emailValidator = (email) => {};
const Footer = ({ navigation }) => {
  return (
    <View>
      <View style={{ justifyContent: "center" }}>
        <View
          style={{
            marginBottom: 20,
            marginTop: 20,
            marginLeft: 154,
            marginRight: 10,
            backgroundColor: "white",
            width: 50,
            height: 50,
            borderRadius: 44,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="x" />
        </View>
      </View>
      {/* <Button variant="transparent"> */}

      {/* </Button> */}
    </View>
  );
};
const ForgotPasswordMsg = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <Container pattern={1} footer={<Footer navigation={navigation} />}>
      <View />
      <View
        style={{
          backgroundColor: "#E9F9F7",

          width: 100,
          height: 100,
          borderRadius: 75,
          justifyContent: "center",
          marginLeft: 140,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: 20,
            opacity: 1,
          }}
        >
          <Icon name="check" size={34} color="#2CB9B0" style={{ opacity: 1 }} />
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 28,
            marginBottom: 20,
            fontFamily: "sf-pro-bold",
            color: "#0C0D34",
            textAlign: "center",
          }}
        >
          Your Password was succesfully changed.
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            lineHeight: 20,
            fontFamily: "sf-pro-regular",
            color: "#0C0D34",
            marginBottom: 20,
          }}
        >
          Click the below button to login again
        </Text>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Button
            variant="primary"
            OnPress={() => true}
            label="Log into your Account"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </Container>
  );
};
export default ForgotPasswordMsg;
