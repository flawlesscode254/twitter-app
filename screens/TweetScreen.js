import React from 'react'
import { StyleSheet, View, TextInput, Image } from 'react-native'
import BottomChoices from '../components/BottomChoices'
import Objects from '../components/Objects'

const TweetScreen = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "row",
                width: "100%",
                marginTop: 10
            }}>
            <Image style={{
                width: 40,
                height: 40,
                borderRadius: 999,
                marginLeft: 5,
                marginTop: 30
            }} source={{ uri: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d8aca3e6de3150009a505c1%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D114%26cropX2%3D2537%26cropY1%3D240%26cropY2%3D2662" }} />
            <TextInput style={{
                flex: 1,
                marginLeft: 5,
                marginRight: 10,
                paddingHorizontal: 10,
                fontSize: 15,
                height: 100,
                maxHeight: 300,
                marginBottom: 100
            }} placeholder="What's happening?" multiline={true} numberOfLines={5} />
            </View>
            <BottomChoices />
            <Objects />
        </View>
    )
}

export default TweetScreen

const styles = StyleSheet.create({})
