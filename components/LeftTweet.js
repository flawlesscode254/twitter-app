import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const LeftTweet = () => {
    return (
        <View>
            <Image style={{
                width: 50,
                height: 50,
                borderRadius: 999
            }} source={{ uri: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d8aca3e6de3150009a505c1%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D114%26cropX2%3D2537%26cropY1%3D240%26cropY2%3D2662" }} />
        </View>
    )
}

export default LeftTweet

const styles = StyleSheet.create({})
