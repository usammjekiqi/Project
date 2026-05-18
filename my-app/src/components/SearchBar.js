import React from "react";
import {
  TextInput,
  StyleSheet,
} from "react-native";

export default function SearchBar({
  value,
  onChangeText,
}) {
  return (
    <TextInput
      placeholder="Search drinks..."
      placeholderTextColor="#999"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#181818",
    color: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
});