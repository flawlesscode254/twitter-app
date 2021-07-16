import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-elements'

const MessagesNotifications = () => {
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
                }}>Direct Messages</Text>
            </View>
            
            <View style={{
                padding: 15,
                backgroundColor: "#FFF"
            }}>
                <View style={{
                    marginBottom: 10
                }}>
                    <Text style={{
                        fontSize: 15
                    }}>Receive message requests</Text>
                    <View style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                    }}>
                        <View style={{
                            width: 260
                        }}>
                    <Text style={{
                        color: "gray"
                    }}>You will be able to receive Direct Message requests from anyone on Twitter, even if you don't follow them.
                        <Text style={{
                            color: "#00acee"
                        }}>Learn more</Text>
                    </Text>
                        </View>
                    <Switch onChange={Set} value={loc} color="#00acee" />
                </View>
                </View>

                <View style={{
                    marginTop: 10
                }}>
                    <Text style={{
                        fontSize: 15
                    }}>Show read receipts </Text>
                    <View style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row"
                    }}>
                        <View style={{
                            width: 260
                        }}>
                    <Text style={{
                        color: "gray"
                    }}>You will be able to receive Direct Message requests from anyone on Twitter, even if you don't follow them.
                        <Text style={{
                            color: "#00acee"
                        }}>Learn more</Text>
                    </Text>
                        </View>
                    <Switch onChange={Change} value={set} color="#00acee" />
                </View>
                </View>
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
                }}>Notifications</Text>
            </View>

            <View style={{
                backgroundColor: "#FFF",
                padding: 15,
                justifyContent: "flex-start"
            }}>
                <Text style={{
                    fontSize: 15
                }}>Push notifications</Text>
            </View> 

        </View>
    )
}

export default MessagesNotifications

const styles = StyleSheet.create({})
