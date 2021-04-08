import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPalette = ({ route }) => {
  const { paletteName, colors } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{paletteName}</Text>
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} color={item.hexCode} />
        )}
        keyExtractor={(item, index) => item.colorName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "500",
  },

  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2",
  },
  magenta: {
    backgroundColor: "#d33682",
  },
  orange: {
    backgroundColor: "#cb4b16",
  },
});

export default ColorPalette;
