import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

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
      <ActivityIndicator size="small" color="#00acee" />
      <EvilIcons name="plus" color="#00acee" size={40} />
    </View>
  );
};

export default Objects;

const styles = StyleSheet.create({});
