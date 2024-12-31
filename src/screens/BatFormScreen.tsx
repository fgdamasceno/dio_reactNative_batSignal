import React from "react";
import { View, Text, TextInput, Image } from "react-native";

import { styles } from "./BatFormScreenStyles";

export function BatFormScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/batDarkTransparencyLogo.png")}
      />
      <Text style={styles.text}>Full Name:</Text>
      <TextInput
        style={styles.mainInputs}
        placeholder="Bruce Wayne"
        placeholderTextColor="#44496f"
      ></TextInput>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.mainInputs}
        placeholder="bruce.wayne@email.com"
        placeholderTextColor="#44496f"
        keyboardType="email-address"
      ></TextInput>
      <Text style={styles.text}>Phone Number:</Text>
      <TextInput
        style={styles.mainInputs}
        placeholder="330 345 2835"
        placeholderTextColor="#44496f"
        keyboardType="numeric"
      ></TextInput>
      <Text style={styles.text}>Address:</Text>
      <TextInput
        style={styles.mainInputs}
        placeholder="224 Park Drive, Gothan City"
        placeholderTextColor="#44496f"
      ></TextInput>
      <Text style={styles.button}>🗺️ USE MY LOCATION</Text>
      <Text style={styles.text}>Description:</Text>
      <TextInput
        style={styles.description}
        placeholder="Add some description..."
        placeholderTextColor="#44496f"
      ></TextInput>
      <Text style={styles.sendButton}>SEND</Text>
      <Image
        style={styles.homeButton}
        source={require("../../assets/home.png")}
      ></Image>
    </View>
  );
}
