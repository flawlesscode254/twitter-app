import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import TweetScreen from "../screens/TweetScreen";

const MainStackScreen = () => {
  const Tab = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: "#FFF",
      paddingBottom: 20,
      paddingTop: 20,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = "home";

      switch (route.name) {
        case "Home":
          iconName = "home";
          break;
        case "Search":
          iconName = "search";
          break;
        case "Notifications":
          iconName = "notifications";
          break;
        case "Messages":
          iconName = "mail";
          break;

        default:
          iconName = "home";
      }
      return (
        <Ionicons
          name={focused ? iconName : iconName + "-outline"}
          size={28}
          color={focused ? "#00acee" : "black"}
        />
      );
    },
  });

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
};

export default MainStackScreen;

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation()

  const goTo = () => {
    navigation.goBack()
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleAlign: "center",
          headerTitle: () => (
            <Ionicons name="logo-twitter" size={30} color="#00acee" />
          ),
          headerRight: () => (
            <Ionicons name="star-outline" size={30} color="#00acee" />
          ),
          headerLeft: () => <Ionicons name="menu" size={30} color="#00acee" />,
        }}
      />
      <Stack.Screen
        name="NewTweet"
        component={TweetScreen}
        options={{
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleAlign: "center",
          headerTitle: () => (
            <View
              style={{
                backgroundColor: "#00acee",
                paddingHorizontal: 20,
                paddingVertical: 7,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}
              >
                Tweet
              </Text>
            </View>
          ),
          headerLeft: () => 
          <TouchableOpacity onPress={goTo}>
            <Ionicons name="close" size={30} color="#00acee" />
          </TouchableOpacity>
        }}
      />
    </Stack.Navigator>
  );
};
