import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
  },
});

export const App: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello World</Text>
  </View>
);
