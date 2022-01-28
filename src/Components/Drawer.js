import React from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import DrawerItem from "./DrawerItem";
import RoundedIcon from "./RoundedIcon";

const { width } = Dimensions.get("window");
export const drawer_width = width * 0.73;
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const Items = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "#2CB9B0",
  },
  {
    icon: "heart",
    label: "Favourite Outfits",
    screen: "FavouriteOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "pink",
  },
];

const DrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.2, backgroundColor: "white" }}>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            borderBottomRightRadius: 75,
            backgroundColor: "#0C0D34",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 30,
          }}
        >
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <RoundedIcon
              size={24}
              name="x"
              color="white"
              backgroundColor="#0C0D34"
            />
          </TouchableOpacity>

          <Text style={{ color: "white" }}>MY PROFILE</Text>
          <TouchableOpacity onClick={() => alert("hello")}>
            <RoundedIcon
              size={24}
              name="shopping-bag"
              color="white"
              backgroundColor="#0C0D34"
              onClick={() => alert("hello")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.8 }}>
        <View style={{ flex: 1, backgroundColor: "#0C0D34" }}></View>
        <View style={{ flex: 1, backgroundColor: "#2CB9B0" }}></View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "white",
            borderTopLeftRadius: 75,
            borderBottomRightRadius: 75,
            justifyContent: "center",
            padding: 40,
            paddingBottom: 130,
          }}
        >
          <View
            style={{
              backgroundColor: "#2CB9B0",
              borderRadius: 75,
              width: 120,
              height: 120,
              alignSelf: "center",
              top: -20,
            }}
          ></View>
          <View style={{ marginVertical: 5 }}>
            <Text style={{ fontFamily: "sf-pro-semibold", fontSize: 28 }}>
              Akshay Nayak
            </Text>
            <Text
              style={{
                fontFamily: "sf-pro-regular",
                fontSize: 16,
                color: "grey",
              }}
            >
              uakshaynayak@gmail.com
            </Text>
          </View>

          {Items.map((item) => (
            <DrawerItem key={item.screen} navigation={navigation} {...item} />
          ))}
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          backgroundColor: "white",
          width: drawer_width,
          overflow: "hidden",
          height: height * 0.61,
          borderTopLeftRadius: 75,
        }}
      >
        <Image
          source={require("../../assets/drawer.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            position: "absolute",
            top: 0,
            bottom: 0,
            top: -height * (1 - 0.61),
            height: height,
            width: drawer_width,
            right: 0,
            left: 0,

            borderTopLeftRadius: 75,
            backgroundColor: "#2CB9B0",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
