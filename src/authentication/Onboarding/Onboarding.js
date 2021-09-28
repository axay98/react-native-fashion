import React, { useRef } from "react";
import {
  onScrollEvent,
  useValue,
  interpolateColor,
} from "react-native-redash/lib/module/v1";
import { Dimensions, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Animated, { multiply } from "react-native-reanimated";
import Subslide from "./Subslide";
import Slide from "./Slide";
// import { Animated } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    flex: 1.7,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footercontent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 75,
  },
});

const slides = [
  {
    label: "Relaxed",
    color: "#BFEAF5",
    picture: require("../../../assets/1.png"),
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit ? Dont worry! Find the best outfit here!",
  },
  {
    label: "Playful",
    color: "#BEECC4",
    subtitle: "Hear it First,Wear it First",
    picture: require("../../../assets/2.png"),
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
  },
  {
    label: "Excentric",
    color: "#FFE4D9",
    subtitle: "Your Style, Your Way",
    picture: require("../../../assets/3.png"),
    description:
      "Create your individual & unique style and look amazing everyday",
  },
  {
    label: "Funky",
    color: "#FFDDDD",
    picture: require("../../../assets/4.png"),
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
  },
];

const Onboarding = ({ navigation }) => {
  const x = useValue(0);
  const scroll = useRef(null);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ label, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ label, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: backgroundColor,
          }}
        />
        <Animated.View
          style={[
            styles.footercontent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
            { borderTopLeftRadius: 75 },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => {
            const last = index === slides.length - 1;
            return (
              <Subslide
                key={index}
                onPress={() => {
                  if (last) {
                    navigation.navigate("Welcome");
                  } else {
                    scroll.current.scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                }}
                {...{ subtitle, description, last }}
              />
            );
          })}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
