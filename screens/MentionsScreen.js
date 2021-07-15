import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TweetButton from '../components/TweetButton'

const MentionsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
                marginBottom: 20
            }}>Nothing to see here - yet.</Text>
            <Text style={{
                fontWeight: "normal",
                color: "gray",
                textAlign: "center"
            }}>When someone mentions you in a Tweet, you'll see it here</Text>
            <TweetButton />
        </View>
    )
}

export default MentionsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30
    }
})
