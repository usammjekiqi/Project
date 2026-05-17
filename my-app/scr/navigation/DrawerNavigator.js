import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "../../HomeStack";
import CategoriesStack from "../../CategoriesStack";
import FavoritesStack from "../../FavoritesStack";
import AboutScreen from "../../screens/AboutScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0B0B0B",
        },
        headerTintColor: "#fff",
        drawerStyle: {
          backgroundColor: "#111",
        },
        drawerLabelStyle: {
          color: "#fff",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
      />

      <Drawer.Screen
        name="Categories"
        component={CategoriesStack}
      />

      <Drawer.Screen
        name="Favorites"
        component={FavoritesStack}
      />

      <Drawer.Screen
        name="About"
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
}