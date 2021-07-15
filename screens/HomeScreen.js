import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import MainTweet from '../components/MainTweet'
import TweetButton from '../components/TweetButton'

const Home = () => {
    return (
        <View>
            <ScrollView>
                <MainTweet />
                <MainTweet />
            </ScrollView>
                <TweetButton />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
