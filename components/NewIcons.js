import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {Ionicons, EvilIcons} from '@expo/vector-icons'

const NewIcons = () => {
    return (
        <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 20
        }}>
            <View style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Ionicons style={{
                    marginRight: 5
                }} name="chatbubbles-outline" size={30} color="#FFF" />
                <Text style={{
                    marginRight: 20,
                    fontSize: 12,
                    color: "#FFF"
                }}>1,000</Text>
            </View>
            <View style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Ionicons style={{
                    marginRight: 5
                }} name="repeat" size={30} color="#FFF" />
                <Text style={{
                    marginRight: 20,
                    fontSize: 12,
                    color: "#FFF"
                }}>1,000</Text>
            </View>
            <View style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginRight: 20
            }}>
                <Ionicons style={{
                    marginRight: 5
                }} name="heart-outline" size={30} color="#FFF" />
                <Text style={{
                    fontSize: 12,
                    color: "#FFF"
                }}>1,000</Text>
            </View>
            <EvilIcons name="share-google" size={30} color="#FFF" />
        </View>
    )
}

export default NewIcons

const styles = StyleSheet.create({})
