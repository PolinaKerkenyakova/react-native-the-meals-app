import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import MealList from "../components/MealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let selectedCategory = CATEGORIES.find(
      (category) => category.id === categoryId
      
    );

    navigation.setOptions({ title: selectedCategory.title });

    const categoryMeals = MEALS.filter(
      (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );

    setMeals(categoryMeals);
  }, []);

  return <MealList listData={meals} navigation={navigation} />;
};

const styles = StyleSheet.create({});

export default CategoryMealScreen;
