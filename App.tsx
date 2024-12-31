import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import MainBatScreen from "./src/screens/MainBatScreen";
import { BatFormScreen } from "./src/screens/BatFormScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainBatScreen /> */}
      <BatFormScreen />

      <StatusBar style="light"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
