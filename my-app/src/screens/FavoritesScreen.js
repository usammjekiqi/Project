import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";

import useFavorites from "../hooks/useFavorites";
import DrinkCard from "../components/DrinkCard";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.empty}>
          No favorites yet.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.idDrink}
          renderItem={({ item }) => (
            <DrinkCard
              item={item}
              onPress={() =>
                navigation.navigate("Details", {
                  id: item.idDrink,
                })
              }
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    padding: 16,
  },

  empty: {
    color: "#fff",
    textAlign: "center",
    marginTop: 40,
  },
});