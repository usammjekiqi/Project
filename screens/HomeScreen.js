import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    fetchPerfumes();
  }, []);

  const fetchPerfumes = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/fragrances"
    );

    const data = await response.json();

    setPerfumes(data.products);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={perfumes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#eee",
              padding: 10,
              marginBottom: 10,
              borderRadius: 10,
            }}
            onPress={() =>
              navigation.navigate("Details", {
                perfume: item,
              })
            }
          >
            <Image
              source={{ uri: item.thumbnail }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
            />

            <Text style={{ fontSize: 18 }}>
              {item.title}
            </Text>

            <Text>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
