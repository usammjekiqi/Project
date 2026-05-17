import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
} from "react-native";

import SearchBar from "../components/SearchBar";
import DrinkCard from "../components/DrinkCard";
import useDrinks from "../hooks/useDrinks";

export default function HomeScreen({ navigation }) {
  const {
    featuredDrink,
    searchResults,
    search,
  } = useDrinks();

  const [query, setQuery] = useState("");

  const handleSearch = async (text) => {
    setQuery(text);
    await search(text);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={query}
        onChangeText={handleSearch}
      />

      {query.length > 0 ? (
        <FlatList
          data={searchResults}
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
      ) : (
        featuredDrink && (
          <DrinkCard
            item={featuredDrink}
            onPress={() =>
              navigation.navigate("Details", {
                id: featuredDrink.idDrink,
              })
            }
          />
        )
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
});