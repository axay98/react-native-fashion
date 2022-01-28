import React, { useState } from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import { View } from "react-native";
import { sub } from "react-native-reanimated";
import Background from "../Components/Background";

import { useTransition } from "react-native-redash/lib/module/v1";
import Categories from "./Categories";

const cards = [
  { index: 3, source: require("../../assets/4.png") },
  { index: 2, source: require("../../assets/3.png") },
  { index: 1, source: require("../../assets/2.png") },
  { index: 0, source: require("../../assets/1.png") },
];
const step = 1 / (cards.length - 1);
const OutfitIdeas = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <Background />
        <Header navigation={navigation} />
        <Categories />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex((prevState) => prevState + step)}
                {...{ source, step }}
              />
            )
        )}
      </View>
    </View>
  );
};
export default OutfitIdeas;
