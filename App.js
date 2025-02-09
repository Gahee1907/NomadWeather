import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

console.log(SCREEN_WIDTH);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Suwon</Text>
      </View>
      <ScrollView 
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1, 
      backgroundColor: "tomato"
    },
    city: {
      flex: 1.2,
      justifyContent: "center",
      alignItems: "center",
    },
    cityName: {
      fontSize: 58,
      fontWeight: "500"
    },
    weather: {
    },
    day: { 
      width: 500,
      alignItems: "center",
    },
    temp: {
      marginTop: 50,
      fontSize: 178,
      fontWeight: "600",
    },
    description: {
      marginTop: -30,
      fontSize: 50,
    }
});