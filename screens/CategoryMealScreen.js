import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealScreen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Meal Details")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()}/>
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

export default CategoryMealScreen;
