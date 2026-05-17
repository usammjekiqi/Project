import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import { getDrinkDetails } from "../api/drinks";

export default function DetailsScreen({ route }) {
  const { id } = route.params;

  const [drink, setDrink] = useState(null);

  useEffect(() => {
    loadDrink();
  }, []);

  const loadDrink = async () => {
    const data = await getDrinkDetails(id);
    setDrink(data);
  };

  if (!drink) return null;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: drink.strDrinkThumb }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {drink.strDrink}
      </Text>

      <Text style={styles.category}>
        {drink.strCategory}
      </Text>

      <Text style={styles.instructions}>
        {drink.strInstructions}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },

  image: {
    width: "100%",
    height: 320,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    padding: 16,
  },

  category: {
    color: "#FF8C00",
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  instructions: {
    color: "#ddd",
    fontSize: 16,
    lineHeight: 24,
    padding: 16,
  },
});