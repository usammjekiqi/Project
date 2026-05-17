import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function DrinkCard({ item, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Image
        source={{ uri: item.strDrinkThumb }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {item.strDrink}
        </Text>

        <Text style={styles.category}>
          {item.strCategory}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#181818",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 16,
  },

  image: {
    width: "100%",
    height: 200,
  },

  content: {
    padding: 14,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  category: {
    color: "#FF8C00",
    marginTop: 6,
  },
});