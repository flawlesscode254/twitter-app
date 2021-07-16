import React, {useRef} from 'react'
import { StyleSheet, DrawerLayoutAndroid, ScrollView } from 'react-native'
import MainTweet from '../components/MainTweet'
import TweetButton from '../components/TweetButton'
import LeftNavigationScreen from './LeftNavigationScreen'

const Home = () => {

    const drawer = useRef(null);

    return (
    <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={LeftNavigationScreen}
        >
            <ScrollView>
                <MainTweet />
                <MainTweet />
            </ScrollView>
                <TweetButton />
        </DrawerLayoutAndroid>
    )
}

export default Home

const styles = StyleSheet.create({})
