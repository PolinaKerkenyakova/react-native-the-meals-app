import {
  View,
  StyleSheet,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const gridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Category Meal", {
            categoryId: itemData.item.id,
          })
        }
        style={{ flex: 1 }}
      >
        <View style={styles.gridItem}>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={gridItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 30,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    height: 150,
  },
});

export default CategoriesScreen;
