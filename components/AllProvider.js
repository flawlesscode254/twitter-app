import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const AllProvider = () => {
    return (
        <View style={{
            borderBottomColor: "gray",
            borderBottomWidth: 0.5
        }}>
        <View style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "row",
            marginTop: 20,
            marginLeft: 30,
        }}>
            <Ionicons style={{
                marginRight: 20,
                marginTop: 5
            }} name="flash" color="purple" size={30} />
            <View style={{
                width: 250
            }}>
            <Image style={{
                width: 50,
                height: 50,
                borderRadius: 999,
                marginBottom: 15
            }} source={{ uri: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d8aca3e6de3150009a505c1%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D114%26cropX2%3D2537%26cropY1%3D240%26cropY2%3D2662" }} />
            <Text style={{
                marginBottom: 10
            }}>Recent Tweet from <Text style={{
                fontWeight: "bold"
            }}>Jack Dorsey</Text> </Text>
            <Text style={{
                marginBottom: 50,
                color: "gray"
            }}>
                Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Voluptatibus, quis 
                 odit. Nam delectus unde eveniet, tenetur
                  eligendi cum! Quos veniam est labore excepturi
                   voluptas quia deserunt obcaecati amet commodi? Neque!
            </Text>
            </View>
        </View>
        </View>
    )
}

export default AllProvider

const styles = StyleSheet.create({})
