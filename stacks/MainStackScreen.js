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
import ViewTweetImage from "../screens/ViewTweetImage";
import SearchSettings from "../screens/SearchSettings";
import NotificationsSettings from "../screens/NotificationsSettings";
import MessagesNotifications from "../screens/MessagesNotifications";

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
    navigation.navigate("HomeScreen")
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => (
            <Ionicons name="logo-twitter" size={30} color="#00acee" />
          )
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
      <Stack.Screen
        name="ViewTweet"
        component={ViewTweetImage}
        options={{
          headerTintColor: "#FFF",
          headerLeftContainerStyle: {
            marginLeft: 15,
            color: "#FFF"
          },
          headerTitleAlign: "left",
          headerRightContainerStyle: {
            marginRight: 20
          },
          headerStyle: {
            backgroundColor: "gray",
            shadowOpacity: 0,
            elevation: 0
          },
          headerTitleStyle: {
            color: "gray"
          },
          headerRight: () => (
            <Ionicons name="ellipsis-vertical" size={24} color="#FFF" />
          )
        }}
      />
    </Stack.Navigator>
  );
};

const MessageNavigator = () => {
  const Stack = createStackNavigator()

  const navigation = useNavigation()

  const goSettings = () => {
    navigation.navigate("MessagesSettings")
  }

  const goTo = () => {
    navigation.goBack()
  }

  const goBack = () => {
    navigation.navigate("MessagesScreen")
  }

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
            <TouchableOpacity onPress={goSettings}>
              <Ionicons name="settings-outline" size={20} color="#00acee" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={goTo}>
              <Ionicons name="arrow-back" size={30} color="#00acee" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="MessagesSettings"
        component={MessagesNotifications}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleAlign: "center",
          headerTitle: () => (
            <View>
              <Text style={{
                fontSize: 20,
                letterSpacing: 1
              }}>Direct Messages</Text>
              <Text style={{
                color: "gray"
              }}>@Duncan Kipkemoi</Text>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={goBack}>
              <Ionicons name="arrow-back" size={30} color="#00acee" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

const SearchNavigator = () => {
  const Stack = createStackNavigator()

  const navigation = useNavigation()

  const goTo = () => {
    navigation.goBack()
  }

  const goSettings = () => {
    navigation.navigate("SearchSettings")
  }

  const goBack = () => {
    navigation.navigate("SearchScreen")
  }

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
            <TouchableOpacity onPress={goSettings}>
              <Ionicons name="settings-outline" size={20} color="#00acee" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={goTo}>
              <Ionicons name="arrow-back" size={30} color="#00acee" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SearchSettings"
        component={SearchSettings}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleAlign: "left",
          headerTitle: () => (
            <View>
              <Text style={{
                fontSize: 20,
                letterSpacing: 1
              }}>Explore Settings</Text>
              <Text style={{
                color: "gray"
              }}>@Duncan Kipkemoi</Text>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={goBack}>
              <Ionicons name="arrow-back" size={30} color="#00acee" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

const NotificationsNavigator = () => {
  const Stack = createStackNavigator()

  const navigation = useNavigation()

  const goTo = () => {
    navigation.goBack()
  }

  const goBack = () => {
    navigation.navigate("NotificationsScreen")
  }

  const goSettings = () => {
    navigation.navigate("NotificationsSettings")
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationsScreen"
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
            <TouchableOpacity onPress={goSettings}>
              <Ionicons name="settings-outline" size={20} color="#00acee" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={goTo}>
              <Ionicons name="arrow-back" size={30} color="#00acee" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="NotificationsSettings"
        component={NotificationsSettings}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleAlign: "center",
          headerTitle: () => (
            <View>
              <Text style={{
                fontSize: 20,
                letterSpacing: 1
              }}>Notifications</Text>
              <Text style={{
                color: "gray"
              }}>@Duncan Kipkemoi</Text>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={goBack}>
              <Ionicons name="arrow-back" size={30} color="#00acee" />
            </TouchableOpacity>
          ),
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
