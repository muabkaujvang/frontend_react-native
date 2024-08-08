// screens/Signup.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const Signup = ({ navigation }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch(
        "http://192.168.218.246:3000/admin/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            phoneNumber: phoneNumber,
            password: password,
          }),
        }
      );
  
      const responseText = await response.text();
      const contentType = response.headers.get("Content-Type");
      let result = responseText;

      if (contentType && contentType.includes("application/json")) {
        try {
          result = JSON.parse(responseText);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.error("Unexpected content type:", contentType);
      }

      if (response.ok) {
         navigation.navigate("Tabs");
      } else {
        Alert.alert("Signup Failed", result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Signup error: ", error);
      Alert.alert("Signup Failed", "Something went wrong");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 22 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginVertical: 12,
                  color: COLORS.white,
                }}
              >
                Create Account
              </Text>
              <Text style={{ fontSize: 16, color: COLORS.white }}>
                Connect with your friends today!
              </Text>
            </View>

            <View style={{ marginTop: 4 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  marginVertical: 8,
                  color: COLORS.white,
                }}
              >
                Email address
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.white,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="Enter your email address"
                  placeholderTextColor={COLORS.white}
                  keyboardType="email-address"
                  style={{
                    width: "100%",
                    color: COLORS.white,
                  }}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  marginVertical: 8,
                  color: COLORS.white,
                  marginTop: 20,
                }}
              >
                Phone Number
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.white,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="+856"
                  placeholderTextColor={COLORS.white}
                  keyboardType="numeric"
                  style={{
                    width: "12%",
                    borderRightWidth: 1,
                    borderRightColor: COLORS.white,
                    height: "100%",
                    color: COLORS.white,
                  }}
                />

                <TextInput
                  placeholder="Enter your phone number"
                  placeholderTextColor={COLORS.white}
                  keyboardType="numeric"
                  style={{
                    width: "85%",
                    color: COLORS.white,
                  }}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>
            </View>

            <View style={{ marginTop: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  marginVertical: 8,
                  color: COLORS.white,
                }}
              >
                Password
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.white,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                  flexDirection: "row",
                }}
              >
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.white}
                  secureTextEntry={isPasswordShow}
                  style={{
                    width: "90%",
                    color: COLORS.white,
                  }}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordShow(!isPasswordShow)}
                  style={{
                    position: "absolute",
                    right: 12,
                  }}
                >
                  {isPasswordShow ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.white} />
                  ) : (
                    <Ionicons name="eye" size={24} color={COLORS.white} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginVertical: 6,
                marginTop: 12,
              }}
            >
              <Checkbox
                style={{ marginRight: 8 }}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? COLORS.primary : undefined}
              />

              <Text style={{ color: COLORS.white }}>
                I agree to the terms and conditions
              </Text>
            </View>

            <Button
              title="Sign Up"
              onPress={handleSignup}
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: COLORS.white,
                  marginHorizontal: 10,
                }}
              />
              <Text style={{ color: COLORS.white }}>Or Sign up with</Text>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: COLORS.white,
                  marginHorizontal: 10,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  height: 52,
                  borderWidth: 1,
                  borderColor: COLORS.white,
                  marginRight: 4,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={{
                    uri: "https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png",
                  }}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 40,
                  }}
                  resizeMode="contain"
                />
                <Text style={{ color: COLORS.white }}>Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  height: 52,
                  borderWidth: 1,
                  borderColor: COLORS.white,
                  marginRight: 4,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={{
                    uri: "https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj",
                  }}
                  style={{
                    height: 35,
                    width: 35,
                    marginRight: 10,
                    borderRadius: 40,
                  }}
                  resizeMode="contain"
                />
                <Text style={{ color: COLORS.white }}>Google</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 22,
              }}
            >
              <Text style={{ fontSize: 16, color: COLORS.white }}>
                Already have an account
              </Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.white,
                    fontWeight: "bold",
                    marginLeft: 6,
                  }}
                >
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;