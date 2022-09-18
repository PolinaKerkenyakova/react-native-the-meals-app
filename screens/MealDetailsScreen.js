import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>MealDetailsScreen</Text>
      <Button title="Go Home" onPress={() => navigation.popToTop()}/>
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