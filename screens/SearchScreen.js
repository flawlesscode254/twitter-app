import React, {useRef} from 'react'
import { StyleSheet, DrawerLayoutAndroid, Text, View } from 'react-native'
import TweetButton from '../components/TweetButton'
import LeftNavigationScreen from './LeftNavigationScreen'

const SearchScreen = () => {

    const drawer = useRef(null);

    return (
    <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={LeftNavigationScreen}
        >
            <View style={styles.container}>
                <Text>Search</Text>
            </View>
            <TweetButton />
        </DrawerLayoutAndroid>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
