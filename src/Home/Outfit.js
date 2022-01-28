import React, { useState } from "react";
import { View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import RoundedIcon from "../Components/RoundedIcon";
View;

const Outfit = ({ outfit, width }) => {
  const [selected, setSelected] = useState(false);

  const outfitSelected = () => {
    setSelected((prev) => !prev);
    outfit.selected = !outfit.selected;
  };

  return (
    <BorderlessButton onPress={outfitSelected}>
      <View
        style={{
          backgroundColor: outfit.color,
          width,
          height: width * outfit.aspectRatio,
          borderRadius: 15,
          marginBottom: 40,
          alignItems: "flex-end",
          padding: 40,
        }}
      >
        {selected && (
          <RoundedIcon
            name="check"
            backgroundColor="primary"
            color="background"
            size={24}
          />
        )}
      </View>
    </BorderlessButton>
  );
};

export default Outfit;
