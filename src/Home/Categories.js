import React from "react";
import { ScrollView } from "react-native";
import Category from "./Category";

const categories = [
  {
    id: "newin",
    title: "New In",
    color: "#FFDDDD",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#BEECC4",
  },
  {
    id: "activewear",
    title: "Active Wear",
    color: "#BFEAF5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#F1E0FF",
  },
  {
    id: "accesories",
    title: "Accesories",
    color: "#FFE8E9",
  },
];

const Categories = () => {
  return (
    <ScrollView horizontal>
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          color={category.color}
        />
      ))}
    </ScrollView>
  );
};
export default Categories;
