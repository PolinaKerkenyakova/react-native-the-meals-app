import { View, Text, StyleSheet, Button } from "react-native";


const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
      <Button title="Go to category meals" onPress={() =>  navigation.navigate('Category Meal')} />
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

export default CategoriesScreen;
