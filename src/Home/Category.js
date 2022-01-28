import React, { useState } from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Category = ({ title, color }) => {
  const [selected, setSelected] = useState(false);
  return (
    <View onPress={() => setSelected((prev) => !prev)}>
      <View style={{ alignItems: "center", marginTop: 70, marginLeft: 10 }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: color,
          }}
        ></View>
        <Text style={{ color: "black" }}>{title}</Text>
      </View>
    </View>
  );
};
export default Category;
