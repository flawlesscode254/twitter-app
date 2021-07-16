import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const NotificationsSettings = () => {
    return (
        <View>
            <View style={{
                padding: 15,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                backgroundColor: "#e4e7ed",
                borderBottomWidth: 0.5,
                borderBottomColor: "#cacccf"
            }}>
                <Text style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: 17
                }}>Filters</Text>
            </View>

            <View style={{
                backgroundColor: "#FFF",
                padding: 15,
                justifyContent: "flex-start",
                borderBottomWidth: 0.5,
                borderBottomColor: "#cacccf"
            }}>
                <View style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                     <Text style={{
                         fontSize: 15
                     }}>Quality filter</Text>
                     <Ionicons name="checkbox" size={24} color="#00acee" />
                </View>
                <View style={{
                    width: 340
                }}>
                    <Text style={{
                        color: "gray"
                    }}>Filter lower-quality content from your applications.</Text>
                    <Text style={{
                        color: "gray"
                    }}>This won't filter out notifications from people you follow or accounts you've interacted with recently.
                    <Text style={{
                        color: "#00acee"
                    }}>Learn more</Text>
                    </Text>
                </View>
            </View>

            <View style={{
                backgroundColor: "#FFF",
                padding: 15,
                justifyContent: "flex-start",
                borderBottomWidth: 0.5,
                borderBottomColor: "#cacccf"
            }}>
                <Text style={{
                    fontSize: 15
                }}>Advanced Filters</Text>
            </View>

            <View style={{
                backgroundColor: "#FFF",
                padding: 15,
                justifyContent: "flex-start"
            }}>
                <Text style={{
                    fontSize: 15
                }}>Muted Words</Text>
            </View> 

            <View style={{
                padding: 15,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                backgroundColor: "#e4e7ed",
                borderBottomWidth: 0.5,
                borderBottomColor: "#cacccf"
            }}>
                <Text style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontSize: 17
                }}>Preferences</Text>
            </View>

            <View style={{
                backgroundColor: "#FFF",
                padding: 15,
                justifyContent: "flex-start",
                borderBottomWidth: 0.5,
                borderBottomColor: "#cacccf"
            }}>
                <View style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                     <Text style={{
                         fontSize: 15
                     }}>Unread notification count badge</Text>
                     <Ionicons name="checkbox" size={24} color="#00acee" />
                </View>
                <View style={{
                    width: 340
                }}>
                    <Text style={{
                        color: "gray"
                    }}>Displays a badge with the number of notifications waiting for you inside the Twitter app.</Text>
                </View>
            </View>

            <View style={{
                backgroundColor: "#FFF",
                padding: 15,
                justifyContent: "flex-start",
                borderBottomWidth: 0.5,
                borderBottomColor: "#cacccf"
            }}>
                <Text style={{
                    fontSize: 15
                }}>Push notifications</Text>
            </View> 

            <View style={{
                backgroundColor: "#FFF",
                padding: 15,
                justifyContent: "flex-start",
                borderBottomWidth: 0.5,
                borderBottomColor: "#cacccf"
            }}>
                <Text style={{
                    fontSize: 15
                }}>SMS notifications</Text>
            </View> 

            <View style={{
                backgroundColor: "#FFF",
                padding: 15,
                justifyContent: "flex-start",
                borderBottomWidth: 0.5,
                borderBottomColor: "#cacccf"
            }}>
                <Text style={{
                    fontSize: 15
                }}>Email notifications</Text>
                <View style={{
                    width: 340
                }}>
                    <Text style={{
                        color: "gray"
                    }}>Control when and how often Twitter sends emails to you.</Text>
                </View>
            </View>

        </View>
    )
}

export default NotificationsSettings

const styles = StyleSheet.create({})
