import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function Header({ headerDisplay }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{headerDisplay}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});

export default Header;
