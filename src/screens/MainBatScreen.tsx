import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./MainBatScreenStyles";

export default function MainBatScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/batLightTransparencyLogo.png")}
      ></Image>
      <Text style={styles.batSignal}>SEND BAT SIGNAL</Text>
    </View>
  );
}
