import React, { useState } from "react";
import { Text, TextInput, View, CheckBox } from "react-native";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import SocialLogin from "../../Components/SocialLogin";
import { Feather as Icon } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OutfitIdeas from "../../Home/OutfitIdeas";

const emailValidator = (email) => {};
const Footer = ({ navigation }) => {
  return (
    <View>
      <SocialLogin />
      {/* <Button variant="transparent"> */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ color: "white" }}>Don't have an account?</Text>
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{ marginLeft: 5, color: "#2CB9B0" }}
        >
          Sign up here
        </Text>
      </View>
      {/* </Button> */}
    </View>
  );
};
const Login = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <Container pattern={1} footer={<Footer navigation={navigation} />}>
      <View />
      <View style={{ padding: 40 }}>
        <Text
          style={{
            fontSize: 28,
            marginBottom: 30,
            fontFamily: "sf-pro-semibold",
            color: "#0C0D34",
            textAlign: "center",
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            lineHeight: 20,
            fontFamily: "sf-pro-regular",
            color: "#0C0D34",
            marginBottom: 20,
          }}
        >
          Use your credentials below and login to your account
        </Text>

        <View
          style={{
            flexDirection: "row",
            height: 48,
            alignItems: "center",
            alignCenter: "center",
            // borderRadius: 4,
            Width: 305,
            borderWidth: 1,
            borderColor: "#2CB9B0",
            marginBottom: 20,
          }}
        >
          <View style={{ marginRight: 5, marginLeft: 5 }}>
            <Icon name="mail" size={16} style={{ color: "#2CB9B0" }} />
          </View>
          <View>
            <TextInput placeholder="Enter your email" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 48,
            alignItems: "center",
            alignCenter: "center",
            // borderRadius: 4,
            Width: 305,
            borderWidth: 1,
            borderColor: "#2CB9B0",
          }}
        >
          <View style={{ marginRight: 5, marginLeft: 5 }}>
            <Icon name="lock" size={16} style={{ color: "#2CB9B0" }} />
          </View>
          <View>
            <TextInput
              secureTextEntry={true}
              placeholder="Enter your Password"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={{ alignSelf: "center" }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 15, marginTop: 5 }}>Remember me ?</Text>
            </View>
          </View>
          <View>
            <Text style={{ marginTop: 5, color: "#2CB9B0" }}>
              Forgot Password?
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Home")}
            label="Log into your account"
          />
        </View>
      </View>
    </Container>
  );
};
export default Login;
