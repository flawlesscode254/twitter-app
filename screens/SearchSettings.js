import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-elements'

const SearchSettings = () => {

    const [set, setSet] = useState(false)
    const [loc, setLoc] = useState(false)

    const Change = () => {
        setSet(!set)
    }

    const Set = () => {
        setLoc(!loc)
    }


    return (
        <View>
            <View style={{
                backgroundColor: "#e4e7ed",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: 15
            }}>
                <Text style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: 17
                }}>Location</Text>
            </View>
            <View style={{
                justifyContent: "space-around",
                alignItems: "center",
                padding: 15,
                flexDirection: "row",
                backgroundColor: "#FFF"
            }}>
                <View style={{
                    width: 270
                }}>
                    <Text style={{
                        fontSize: 15
                    }}>Show content in this location</Text>
                    <Text style={{
                        color: "gray"
                    }}>When this is on, you'll see what's happening around you right now</Text>
                </View>
                <Switch onChange={Set} value={loc} color="#00acee" />
            </View>

            <View style={{
                backgroundColor: "#e4e7ed",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: 15
            }}>
                <Text style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: 17
                }}>Personalization</Text>
            </View>
            <View style={{
                justifyContent: "space-around",
                alignItems: "center",
                padding: 15,
                flexDirection: "row",
                backgroundColor: "#FFF"
            }}>
                <View style={{
                    width: 270
                }}>
                    <Text style={{
                        fontSize: 15
                    }}>Trends for you</Text>
                    <Text style={{
                        color: "gray"
                    }}>You can personalize the trends for you based on your location and who you follow</Text>
                </View>
                <Switch onChange={Change} value={set} color="#00acee" />
            </View>

        </View>
    )
}

export default SearchSettings

const styles = StyleSheet.create({})
