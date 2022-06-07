import { View, StyleSheet, Text } from "react-native";
import React from "react";

const Cross = () => {
  return (
    <View style={styles.cross}>
      <View style={styles.CrossLine} />
      <View style={[styles.CrossLine, styles.CrossLineReversed]} />
    </View>
  );
};

const styles = StyleSheet.create({
  cross: {
    flex: 1,
  },
  CrossLine: {
    position: "absolute",
    left: "45%",
    height: "100%",
    width: 10,
    backgroundColor: "black",
    borderRadius: 5,
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  CrossLineReversed: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});

export default Cross;
