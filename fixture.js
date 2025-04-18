import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { OtherComponent } from "some-other-lib";

// Case 1: Text is imported alongside other components
const Component1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Component1!</Text>
      <Image source={{ uri: "..." }} />
    </View>
  );
};

// Case 2: Only Text is imported from react-native
import { Text as RNText } from "react-native";

const Component2 = () => {
  return (
    <View>
      <RNText>Hello from Component2!</RNText>
      <OtherComponent />
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

export default Component1; // Or Component2, doesn't matter for the transform
