import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CentralTweet = () => {
    return (
        <View style={{
            width: 260
        }}>
            <View style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: 260
            }}>
            <Text style={{
                color: "black",
                fontWeight: "bold"
            }}>Duncan Kipkemoi <Text style={{
                fontWeight: "normal",
                color: "gray"
            }}> @Duncan Kipkemoi</Text></Text>
            <Ionicons name="ellipsis-vertical" color="gray" size={15} />
            </View>
            <Text style={{
                fontWeight: "bold",
                color: "#00acee",
                fontSize: 12,
                letterSpacing: 2
            }}>an hour ago</Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Illo harum rem quas 
                 laborum cupiditate, veritatis voluptate 
                 sed at libero, porro accusantium placeat 
                 impedit quibusdam numquam tempora aliquid
                  commodi dolore laudantium.
            </Text>
        </View>
    )
}

export default CentralTweet

const styles = StyleSheet.create({})
