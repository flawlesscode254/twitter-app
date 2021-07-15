import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {Ionicons, EvilIcons} from '@expo/vector-icons'

const Icons = () => {
    return (
        <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            width: 210,
            marginLeft: 10,
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
                }} name="chatbubbles-outline" size={20} color="black" />
                <Text style={{
                    marginRight: 20,
                    fontSize: 12,
                    color: "gray"
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
                }} name="repeat" size={20} color="black" />
                <Text style={{
                    marginRight: 20,
                    fontSize: 12,
                    color: "gray"
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
                }} name="heart-outline" size={20} color="black" />
                <Text style={{
                    fontSize: 12,
                    color: "gray"
                }}>1,000</Text>
            </View>
            <EvilIcons name="share-google" size={24} color="black" />
        </View>
    )
}

export default Icons

const styles = StyleSheet.create({})
