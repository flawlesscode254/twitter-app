import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import AllProvider from '../components/AllProvider'
import TweetButton from '../components/TweetButton'

const AllScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <AllProvider />
                <AllProvider />
                <AllProvider />
                <AllProvider />
            </ScrollView>
            <TweetButton />
        </View>
    )
}

export default AllScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
