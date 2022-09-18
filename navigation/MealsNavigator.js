// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createStackNavigator();

function PageStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={CategoriesScreen} />
      <Stack.Screen name="Category Meal" component={CategoryMealScreen} />
      <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function PageNavigator() {
  return (
      <NavigationContainer>
        <PageStack />
      </NavigationContainer>
  );
}
