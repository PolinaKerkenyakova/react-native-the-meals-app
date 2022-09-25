import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const [meal, setMeal] = useState();

  useEffect(() => {

    const meal = MEALS.find((meal) => meal.id === mealId);
    setMeal(meal);

    navigation.setOptions({title: meal.title})
  }, []);

  return (
    <View style={styles.screen}>
      <Text>{meal?.title}</Text>
      {/* <Button title="Go Home" onPress={() => navigation.popToTop()} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealDetailsScreen;
