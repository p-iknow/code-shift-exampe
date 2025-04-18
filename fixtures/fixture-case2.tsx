import React from "react";
import { View, StyleSheet } from "react-native";
import { OtherComponent } from "some-other-lib";

// Case 2: Only Text is imported from react-native with an alias
import { Text as RNText } from "react-native";

const Component2: React.FC = () => {
  return (
    <View style={styles.container}>
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
});

export default Component2;
