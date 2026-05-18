import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function CategoriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
      />

      <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}