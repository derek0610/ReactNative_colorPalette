import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";

const PalettePreview = ({ item, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{item.paletteName}</Text>
      <FlatList
        style={{ flexDirection: "row" }}
        data={item.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View
            style={[styles.colorBox, { backgroundColor: item.hexCode }]}
          ></View>
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
    color: "#333",
  },
  colorBox: {
    marginRight: 5,
    width: 30,
    height: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
export default PalettePreview;
