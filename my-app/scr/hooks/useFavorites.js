import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const data = await AsyncStorage.getItem("favorites");

    if (data) {
      setFavorites(JSON.parse(data));
    }
  };

  const addFavorite = async (drink) => {
    const updated = [...favorites, drink];

    setFavorites(updated);

    await AsyncStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  };
  const removeFavorite = async (id) => {
    const updated = favorites.filter(
      (item) => item.idDrink !== id
    );

    setFavorites(updated);

    await AsyncStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  };

  const isFavorite = (id) => {
    return favorites.some(
      (item) => item.idDrink === id
    );
  };return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
}