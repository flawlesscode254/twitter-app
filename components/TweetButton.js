import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

const TweetButton = () => {
    const navigation = useNavigation()

    const goTo = () => {
        navigation.navigate("NewTweet")
    }

    return (
        <TouchableOpacity onPress={goTo} style={{
            backgroundColor: "#00acee",
            height: 55,
            width: 55,
            borderRadius: 999,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 20,
            right: 20,
            flexDirection: "row",
            display: "flex"
        }}>
            <Ionicons style={{
                marginRight: -5
            }} name="add" size={18} color="#FFF" />
            <MaterialCommunityIcons name="feather" size={20} color="#FFF" />
        </TouchableOpacity>
    )
}

export default TweetButton

const styles = StyleSheet.create({})
