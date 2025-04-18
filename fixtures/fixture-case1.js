import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

// Case 1: Text is imported alongside other components
const Component1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Component1!</Text>
      <Image source={{ uri: "..." }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default Component1;
