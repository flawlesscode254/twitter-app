import React from 'react'
import { StyleSheet, TextInput, View, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import NewIcons from '../components/NewIcons'

const ViewTweetImage = () => {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={{
                width: "100%"
            }} behavior="padding" keyboardVerticalOffset={90}>
            <View>
            <Image style={{
                width: "100%",
                height: 300
            }} source={{ uri: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d8aca3e6de3150009a505c1%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D114%26cropX2%3D2537%26cropY1%3D240%26cropY2%3D2662" }} />
            <View style={{
               marginTop: 100,
               marginHorizontal: 25
            }}>
                <NewIcons />
                <TextInput style={{
                    borderBottomColor: "#FFF",
                    borderBottomWidth: 1,
                    paddingTop: 10,
                    color: "#FFF"
                }} placeholder="Tweet your reply" placeholderTextColor="#FFF" />
            </View>
            </View>
                </KeyboardAvoidingView>
        </View>
    )
}

export default ViewTweetImage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    }
})
