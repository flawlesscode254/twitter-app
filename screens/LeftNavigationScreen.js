import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const LeftNavigationScreen = () => {
    return (
        <View>
        <View style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "gray"
        }}>
            <View style={{
                marginHorizontal: 20,
                marginVertical: 20
            }}>
            <Image style={{
                width: 50,
                height: 50,
                borderRadius: 999,
                marginBottom: 7
            }} source={{ uri: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d8aca3e6de3150009a505c1%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D114%26cropX2%3D2537%26cropY1%3D240%26cropY2%3D2662" }} />
            <View style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 10
            }}>
                <Text style={{
                    fontWeight: "bold"
                }}>Duncan Kipkemoi</Text>
                <Ionicons style={{
                    fontWeight: "bold"
                }} name="chevron-down" size={24} color="#00acee" />
            </View>
            <Text style={{
                color: "gray",
                marginBottom: 10
            }}>@Duncan Kipkemoi</Text>
            <View style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "row",
                marginBottom: 15
            }}>
                <View style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginRight: 30
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        marginRight: 10
                    }}>12</Text>
                    <Text style={{
                        color: "gray"
                    }}>Following</Text>
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        marginRight: 10
                    }}>11</Text>
                    <Text style={{
                        color: "gray"
                    }}>Followers</Text>
                </View>
            </View>
            </View>
        </View>

        <View style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "gray"
        }}>
            <View style={{
                marginHorizontal: 20,
                marginVertical: 10
            }}>
                <View style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: 15
                }}>
                    <Ionicons style={{
                        marginRight: 15
                    }} name="person-outline" color="black" size={30} />
                    <Text style={{
                        fontSize: 14,
                        color: "gray"
                    }}>Profile</Text>
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: 15
                }}>
                    <Ionicons style={{
                        marginRight: 15
                    }} name="list" color="black" size={30} />
                    <Text style={{
                        fontSize: 14,
                        color: "gray"
                    }}>Lists</Text>
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: 15
                }}>
                    <Ionicons style={{
                        marginRight: 15
                    }} name="chatbubbles-outline" color="black" size={30} />
                    <Text style={{
                        fontSize: 14,
                        color: "gray"
                    }}>Topics</Text>
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: 15
                }}>
                    <Ionicons style={{
                        marginRight: 15
                    }} name="bookmark-outline" color="black" size={30} />
                    <Text style={{
                        fontSize: 14,
                        color: "gray"
                    }}>Bookmarks</Text>
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: 15
                }}>
                    <Ionicons style={{
                        marginRight: 15
                    }} name="flash-outline" color="black" size={30} />
                    <Text style={{
                        fontSize: 14,
                        color: "gray"
                    }}>Moments</Text>
                </View>
            </View>
        </View>


        <View style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "gray",
        }}>
            <View style={{
                marginHorizontal: 20,
                marginVertical: 15
            }}>
                <Text style={{
                    fontSize: 20,
                    marginBottom: 20
                }}>Settings and Privacy</Text>
                <Text style={{
                    fontSize: 20
                }}>Help Center</Text>
            </View>
        </View>

        <View style={{
            marginHorizontal: 20,
            marginVertical: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
        }}>
            <Ionicons name="bulb-outline" size={24} color="#00acee" />
            <Ionicons name="qr-code" size={24} color="#00acee" />
        </View>

        </View>
    )
}

export default LeftNavigationScreen

const styles = StyleSheet.create({})
