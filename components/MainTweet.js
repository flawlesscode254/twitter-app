import React from "react";
import { StyleSheet, View, Image } from "react-native";
import LeftTweet from "./LeftTweet";
import CentralTweet from "./CentralTweet";
import Icons from "./Icons";

const MainTweet = () => {
  return (
      <View
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          borderBottomWidth: 0.5,
          borderBottomColor: "#949391",
          width: "100%",
          marginTop: 20
        }}
      >
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: 5
          }}
        >
          <LeftTweet />
        </View>
        <View
          style={{
            marginRight: 20,
          }}
        >
          <CentralTweet />
         
          <View style={{
              marginTop: 10
          }}>
        <Image style={{
            height: 230,
            width: 270,
            borderRadius: 15
        }}
          source={{
            uri: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d8aca3e6de3150009a505c1%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D114%26cropX2%3D2537%26cropY1%3D240%26cropY2%3D2662",
          }}
        />
      </View>
      <Icons />
        </View>
      </View>
  );
};

export default MainTweet;

const styles = StyleSheet.create({});
