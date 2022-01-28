import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  interpolateNode,
  Extrapolate,
} from "react-native-reanimated";
import {
  withSpring,
  mixColor,
  mix,
  usePanGestureHandler,
} from "react-native-redash/lib/module/v1";
const { width } = Dimensions.get("window");
const width1 = width * 0.7;
const height = width1 * (425 / 294);
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});

const Card = ({ position, onSwipe, source, step }) => {
  const { gestureHandler, translation, velocity, state } =
    usePanGestureHandler();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);

  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-width1, 0, width1],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });

  const imageScale = interpolateNode(position, {
    inputRange: [0, step],
    outputRange: [1, 0.8],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateY = add(
    translateYOffset,
    withSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  );
  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor: backgroundColor,
            width: width1,
            height: height,
            borderRadius: 24,
            transform: [{ translateY }, { translateX }, { scale }],
          }}
        >
          <Animated.Image
            {...{ source }}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [{ scale: imageScale }],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};
export default Card;
