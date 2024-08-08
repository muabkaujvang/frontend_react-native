// screens/Welcome.js
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../constants/colors"; // Adjust the path if needed
import Button from "../components/Button";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={[COLORS.background]} style={styles.container}>
      <View style={styles.imageContainer}>
        {/* First Image */}
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/8c/78/2e/8c782ea0d5a29edb8ccec39c78857ccc.jpg",
          }}
          style={[
            styles.image,
            {
              top: 30,
              right: 250,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            },
          ]}
        />

        {/* Second Image */}
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_JSAOXm-jb8psW07NFncOifrGjPVcda7BJsdgIO422e9Dh2D12HhRun17gQhePe90XY&usqp=CAU",
          }}
          style={[
            styles.image,
            {
              top: -30,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "4deg" },
              ],
            },
          ]}
        />

        {/* Third Image */}
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yPbXwk9T9YRKQA4DATVwfT5tArLb06Iy0Q&s",
          }}
          style={[
            styles.image,
            {
              top: 150,
              right: 200,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            },
          ]}
        />

        {/* Fourth Image */}
        <Image
          source={{
            uri: "https://imgix.ranker.com/list_img_v2/6528/2606528/original/the-best-hackers-characters?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720",
          }}
          style={[
            styles.image,
            {
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 200,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            },
          ]}
        />

        {/* Text Component */}
        <View style={styles.textContent}>
          <Text style={styles.text}>Let's Get</Text>
          <Text style={styles.text}>Started!</Text>
        </View>

        <Button
          title="Join Now"
          onPress={() => navigation.navigate("Signup")}
          style={{
            marginTop: 450,
            width: 350,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
            }}
          >
            Already have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                fontWeight: "bold",
                marginLeft: 4,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
  },
  textContent: {
    paddingHorizontal: 22,
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 46,
    fontWeight: "bold",
    color: "#fff",
    width: "100%",
    top: -200,
  },
});

export default Welcome;