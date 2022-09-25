// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform, TouchableNativeFeedback, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

let Touchable = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  Touchable = TouchableNativeFeedback;
}

const Stack = createStackNavigator();
const Filters = createStackNavigator();
const Tabs = createBottomTabNavigator();
const MainNav = createDrawerNavigator();

function PageNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? "teal" : "white",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : "teal",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Category Meal" component={CategoryMealScreen} />
      <Stack.Screen
        name="Meal Details"
        component={MealDetailsScreen}
        options={{
          headerRight: () => (
            <View style={{ paddingRight: 20 }}>
              <Touchable onPress={() => {}}>
                <Ionicons name="star" size={24} color="orange" />
              </Touchable>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const FiltersNavigation = () => {
  <Filters.Navigator>
    <Filters.Screen name="Filters" component={FiltersScreen} />
  </Filters.Navigator>;
};

const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tabs.Screen
        name="Meals"
        component={PageNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="ios-restaurant" size={24} color="orange" />
          ),
          tabBarOptions: {
            activeTintColor: "#000",
            inactiveTintColor: "#fff",
          },
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: () => <Ionicons name="star" size={24} color="orange" />,
        }}
      />
    </Tabs.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <MainNav.Navigator
      screenOptions={{
        drawerActiveTintColor: "black",
        drawerInactiveTintColor: "grey",
      }}
    >
      <MainNav.Screen
        name="Meals"
        component={TabsNavigation}
        options={{
          drawerIcon: () => <Ionicons name="star" size={16} color="orange" />,
        }}
      />
      <MainNav.Screen
        name="Filters"
        component={FiltersNavigation}
        options={{
          drawerIcon: () => (
            <Ionicons name="ios-restaurant" size={16} color="orange" />
          ),
        }}
      />
    </MainNav.Navigator>
  );
};

export default function Navigation() {
  return (
    <>
      {/* <NavigationContainer>
        <PageStack />
      </NavigationContainer> */}

      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
}
