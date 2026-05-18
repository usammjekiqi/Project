import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  getCategories,
  filterByCategory,
} from "../api/drinks";

import DrinkCard from "../components/DrinkCard";

export default function CategoriesScreen({
  navigation,
}) {
  const [categories, setCategories] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const data = await getCategories();

    setCategories(data || []);
  };

  const handleCategory = async (category) => {
    const data = await filterByCategory(category);

    setDrinks(data || []);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() =>
              handleCategory(item.strCategory)
            }
          >
            <Text style={styles.categoryText}>
              {item.strCategory}
            </Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={drinks}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    padding: 16,
  },

  categoryBtn: {
    backgroundColor: "#181818",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginRight: 10,
    height: 45,
  },

  categoryText: {
    color: "#fff",
    fontWeight: "600",
  },
});