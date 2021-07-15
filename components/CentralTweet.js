import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CentralTweet = () => {
    return (
        <View style={{
            width: 260
        }}>
            <Text style={{
                color: "black",
                fontWeight: "bold"
            }}>Duncan Kipkemoi <Text style={{
                fontWeight: "normal",
                color: "gray"
            }}> @Duncan Kipkemoi</Text></Text>
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
