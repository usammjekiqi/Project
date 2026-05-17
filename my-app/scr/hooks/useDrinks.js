import { useEffect, useState } from "react";
import {
  getRandomDrink,
  searchDrinks,
} from "../api/drinks";

export default function useDrinks() {
  const [featuredDrink, setFeaturedDrink] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadFeaturedDrink();
  }, []);

  const loadFeaturedDrink = async () => {
    setLoading(true);

    const data = await getRandomDrink();
    setFeaturedDrink(data);

    setLoading(false);
  };

  const search = async (query) => {
    if (!query) return;

    setLoading(true);

    const data = await searchDrinks(query);
    setSearchResults(data || []);

    setLoading(false);
  };

  return {
    featuredDrink,
    searchResults,
    search,
    loading,
  };
}