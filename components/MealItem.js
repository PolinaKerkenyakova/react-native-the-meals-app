import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const MealItem = (props) => {
  let Touchable = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <Touchable onPress={props.onSelect} style={{flex: 1}}>
        <View style={styles.mealItem}>
          <Text>{props.title}</Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 30,
    height: 150,
  },
  mealItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealItem;
