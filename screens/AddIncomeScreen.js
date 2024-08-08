import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const AddIncomeScreen = ({ navigation }) => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const handleSave = () => {
    // Logic to save the income source and amount
    // Navigate back to the Income screen or show a confirmation message
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Income Source</Text>
      <TextInput
        style={styles.input}
        value={source}
        onChangeText={setSource}
        placeholder="Enter income source"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
        placeholderTextColor="#888"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  label: {
    color: "#FFF",
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#333",
    color: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddIncomeScreen;