import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";

export default function DetailsScreen({ route }) {
  const { perfume } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={{ uri: perfume.thumbnail }}
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
        }}
      />

      <Text
        style={{
          fontSize: 24,
          marginTop: 20,
        }}
      >
        {perfume.title}
      </Text>

      <Text style={{ marginTop: 10 }}>
        {perfume.description}
      </Text>

      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          color: "green",
        }}
      >
        ${perfume.price}
      </Text>
    </View>
  );
}