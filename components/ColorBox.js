import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ colorName, color }) => {
  const dynamicBGC = {
    backgroundColor: color,
  };
  return (
    <View>
      <Text style={[styles.colorbar, dynamicBGC]}>
        {colorName}: {color}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorbar: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
export default ColorBox;
