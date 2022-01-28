import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import Button from "../Components/Button";

import Header from "../Components/Header";
import Outfit from "./Outfit";

const { width } = Dimensions.get("window");
let wWidth = width;
const width1 = (wWidth - 15 * 3) / 2;
const outfits = [
  { id: 0, color: "#BFEAF5", aspectRatio: 1, selected: false },
  { id: 1, color: "#BEECC4", aspectRatio: 200 / 145, selected: false },
  { id: 2, color: "#FFE4D9", aspectRatio: 180 / 145, selected: false },
  { id: 3, color: "#FFDDDD", aspectRatio: 180 / 145, selected: false },
  { id: 4, color: "#BFEAF5", aspectRatio: 1, selected: false },
  { id: 5, color: "#F3F0EF", aspectRatio: 120 / 145, selected: false },
  { id: 6, color: "#D5C3BB", aspectRatio: 210 / 145, selected: false },
  { id: 7, color: "#DEEFC4", aspectRatio: 160 / 145, selected: false },
];
const Footer = ({ label, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: "#0C0D34",
        padding: 30,
        borderTopLeftRadius: 75,
      }}
    >
      <View style={{ paddingBottom: 10, alignItems: "center" }}>
        <Button variant="primary" {...{ label, onPress }} />
      </View>
    </View>
  );
};

const FavouriteOutfits = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header navigation={navigation} />
      <ScrollView style={{ marginTop: 60 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 10 }}>
            {outfits
              .filter((_, i) => i % 2 !== 0)
              .map((outfit) => (
                <Outfit key={outfit.id} outfit={outfit} width={width1} />
              ))}
          </View>
          <View style={{ padding: 10 }}>
            {outfits
              .filter((_, i) => i % 2 === 0)
              .map((outfit) => (
                <Outfit key={outfit.id} outfit={outfit} width={width1} />
              ))}
          </View>
        </View>
      </ScrollView>
      <Footer
        label="Add to favourites"
        onPress={() => {
          list.current?.animateNextTransition();
          setOutfits(outfits.filter((outfit) => !outfit.selected));
        }}
      />
    </View>
  );
};
export default FavouriteOutfits;
