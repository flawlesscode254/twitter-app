import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MessagesScreen from "../screens/MessagesScreen";
import TweetScreen from "../screens/TweetScreen";
import MentionsScreen from "../screens/MentionsScreen";
import AllScreen from "../screens/AllScreen";

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
      <Tab.Screen name="Search" component={SearchNavigator} />
      <Tab.Screen name="Notifications" component={NotificationsNavigator} />
      <Tab.Screen name="Messages" component={MessageNavigator} />
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

const MessageNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleAlign: "center",
          headerTitle: () => (
            <TextInput style={{
              backgroundColor: "#cccfce",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 999,
            }} placeholder="Search for people and groups" />
          ),
          headerRight: () => (
            <Ionicons name="settings-outline" size={20} color="#00acee" />
          ),
          headerLeft: () => <Ionicons name="menu" size={30} color="#00acee" />,
        }}
      />
    </Stack.Navigator>
  )
}

const SearchNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleAlign: "left",
          headerTitle: () => (
            <TextInput style={{
              backgroundColor: "#cccfce",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 999,
            }} placeholder="Search twitter" />
          ),
          headerRight: () => (
            <Ionicons name="settings-outline" size={20} color="#00acee" />
          ),
          headerLeft: () => <Ionicons name="menu" size={30} color="#00acee" />,
        }}
      />
    </Stack.Navigator>
  )
}

const NotificationsNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationScreen"
        component={topTabNavigation}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text style={{
              fontSize: 20,
              letterSpacing: 1
            }}>Notifications</Text>
          ),
          headerRight: () => (
            <Ionicons name="settings-outline" size={20} color="#00acee" />
          ),
          headerLeft: () => <Ionicons name="menu" size={30} color="#00acee" />,
        }}
      />
    </Stack.Navigator>
  )
}

const topTabNavigation = () => {

  const MainTab = createMaterialTopTabNavigator()

  return (
    <MainTab.Navigator 
      initialRouteName="All"
      tabBarOptions={{
        activeTintColor: "#00acee",
        style: {
          backgroundColor: "#FFF"
        },
        indicatorStyle: {
          backgroundColor: "#00acee",
          height: 2.5,
        },
        labelStyle: {
          fontWeight: 'bold'
        },
        inactiveTintColor: "gray"
      }}
    >
      <MainTab.Screen
        name="All"
        component={TabOneNavigator}
      />
      <MainTab.Screen
        name="Mentions"
        component={TabTwoNavigator}
      />
    </MainTab.Navigator>
  );
}

const TabOneNavigator = () => {

  const TabOneStack = createStackNavigator()

  return (
    <TabOneStack.Navigator headerMode="none">
      <TabOneStack.Screen
        name="TabOneScreen"
        component={AllScreen}
      />
    </TabOneStack.Navigator>
  );
}


const TabTwoNavigator = () => {

  const TabTwoStack = createStackNavigator()

  return (
    <TabTwoStack.Navigator headerMode="none">
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={MentionsScreen}
      />
    </TabTwoStack.Navigator>
  );
}