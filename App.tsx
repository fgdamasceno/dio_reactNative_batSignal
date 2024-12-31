import { StyleSheet, Text, View, Image } from "react-native";

import MainBatScreen from "./src/screens/MainBatScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MainBatScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181719",
    alignItems: "center",
    justifyContent: "center",
  },
});
