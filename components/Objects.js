import React from "react";
import { StyleSheet, View } from "react-native";
import { EvilIcons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Objects = () => {
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        flexDirection: "row",
      }}
    >
      <EvilIcons name="image" color="#00acee" size={40} />
      <MaterialCommunityIcons name="gif" color="#00acee" size={40} />
      <EvilIcons style={{
          transform: [
              {rotate: '90deg'}
          ]
      }} name="chart" color="#00acee" size={40} />
      <EvilIcons name="location" color="#00acee" size={40} />
      <Ionicons name="radio-button-off" size={30} color="gray" />
      <EvilIcons name="plus" color="#00acee" size={40} />
    </View>
  );
};

export default Objects;

const styles = StyleSheet.create({});
