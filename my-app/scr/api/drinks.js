const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const searchDrinks = async (query) => {
  const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
  const data = await response.json();
  return data.drinks;
};

export const getRandomDrink = async () => {
  const response = await fetch(`${BASE_URL}/random.php`);
  const data = await response.json();
  return data.drinks[0];
};

export const getDrinkDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.drinks[0];
};

export const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/list.php?c=list`);
  const data = await response.json();
  return data.drinks;
};

export const filterByCategory = async (category) => {
  const response = await fetch(
    `${BASE_URL}/filter.php?c=${category}`
  );

  const data = await response.json();
  return data.drinks;
};