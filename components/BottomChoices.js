import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const BottomChoices = () => {
    return (
        <View style={{
            marginTop: 50,
            borderTopWidth: 0.5,
            borderTopColor: "#cfcbca",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderBottomWidth: 0.5,
            borderBottomColor: "#cfcbca"
        }}>
            <Ionicons name="earth" size={24} color="#00acee" />
            <Text style={{
                marginLeft: 10,
                color: "#00acee",
                fontWeight: "bold"
            }}>Everyone can reply</Text>
        </View>
    )
}

export default BottomChoices

const styles = StyleSheet.create({})
