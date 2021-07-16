import React, {useRef} from "react";
import { StyleSheet, Text, View, DrawerLayoutAndroid } from "react-native";
import CreateMessage from "../components/CreateMessage";
import LeftNavigationScreen from "./LeftNavigationScreen";

const MessagesScreen = () => {
  const drawer = useRef(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={LeftNavigationScreen}
    >
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            color: "black",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Send a message, get a message
        </Text>
        <Text
          style={{
            fontWeight: "normal",
            color: "gray",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Direct Messages are private conversations between you and other people
          on Twitter. Share Tweets, media and more!
        </Text>
        <View
          style={{
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 20,
            backgroundColor: "#00acee",
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            Write a message
          </Text>
        </View>
        <CreateMessage />
      </View>
    </DrawerLayoutAndroid>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
