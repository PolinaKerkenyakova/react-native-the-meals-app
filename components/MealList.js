import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";

const MealList = ({navigation, listData}) => {
  const renderMeal = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelect={() =>
          navigation.navigate("Meal Details", {
            mealId: itemData.item.id,
          })
        }
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        renderItem={renderMeal}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealList;
