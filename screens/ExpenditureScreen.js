import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PostScreen = ({ navigation }) => {
  const handleMenuItemPress = (item) => {
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.menu}>
        <MenuItem
          icon="shopping-cart"
          text="Groceries"
          amount="$200.00"
          date="2024-08-01"
          time="14:30"
          onPress={() => handleMenuItemPress("Groceries")}
        />
        <MenuItem
          icon="credit-card"
          text="Utilities"
          amount="$150.00"
          date="2024-08-02"
          time="10:00"
          onPress={() => handleMenuItemPress("Utilities")}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddExpenditure")}
      >
        <Icon name="plus" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const MenuItem = ({ icon, text, amount, date, time, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.menuItem}>
    <Icon name={icon} size={20} color="#FFF" />
    <View style={styles.menuItemTextContainer}>
      <View style={styles.menuItemTextDetails}>
        <Text style={styles.menuItemText}>{text}</Text>
        <Text style={styles.menuItemDate}>
          {date} {time}
        </Text>
      </View>
      <Text style={styles.menuItemAmount}>{amount}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  menuItemTextContainer: {
    marginLeft: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuItemTextDetails: {
    flexDirection: "column",
  },
  menuItemText: {
    fontSize: 18,
    color: "#FFF",
  },
  menuItemDate: {
    fontSize: 14,
    color: "#888",
  },
  menuItemAmount: {
    fontSize: 18,
    color: "#F44336", // Red color for expenditure
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    backgroundColor: "#F44336", // Red color for FAB
    borderRadius: 30,
    elevation: 8,
  },
});

export default PostScreen;