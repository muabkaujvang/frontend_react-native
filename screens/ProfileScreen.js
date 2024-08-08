import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";

const ProfileScreen = ({ navigation }) => {
  const [profilePic, setProfilePic] = useState(
    require("../assets/hairstyle.jpg")
  );

  const handleEditPress = () => {
    // Handle edit button press
  };

  const handleMenuItemPress = (item) => {
    // Handle menu item press
  };

  const selectImage = () => {
    const options = {
      mediaType: "photo",
    };
    launchImageLibrary(options, (response) => {
      if (response.assets && response.assets.length > 0) {
        setProfilePic({ uri: response.assets[0].uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
      </View> */}
      <View style={styles.profileSection}>
        <View style={styles.profilePicContainer}>
          <Image source={profilePic} style={styles.profilePic} />
          <TouchableOpacity style={styles.cameraIcon} onPress={selectImage}>
            <Icon name="camera" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>me</Text>
        <Text style={styles.username}>@student</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <MenuItem
          icon="cog"
          text="Setting"
          onPress={() => handleMenuItemPress("Setting")}
        />
        <MenuItem
          icon="user-friends"
          text="Friend"
          onPress={() => handleMenuItemPress("Friend")}
        />
        <MenuItem
          icon="users"
          text="New Group"
          onPress={() => handleMenuItemPress("New Group")}
        />
        <MenuItem
          icon="life-ring"
          text="Support"
          onPress={() => handleMenuItemPress("Support")}
        />
        <MenuItem
          icon="share-alt"
          text="Share"
          onPress={() => handleMenuItemPress("Share")}
        />
        <MenuItem
          icon="info-circle"
          text="About Us"
          onPress={() => handleMenuItemPress("About Us")}
        />
      </View>
    </View>
  );
};

const MenuItem = ({ icon, text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.menuItem}>
    <Icon name={icon} size={20} color="#4CAF50" />
    <Text style={styles.menuItemText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  header: {
    flexDirection: "row",
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profilePicContainer: {
    position: "relative",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    padding: 5,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  username: {
    fontSize: 16,
    color: "#888",
  },
  editButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#0000ff",
    borderRadius: 5,
  },
  editButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  menu: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  menuItemText: {
    marginLeft: 20,
    fontSize: 18,
    color: "#fff",
  },
});

export default ProfileScreen;
