import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CreateMessage = () => {
    return (
        <TouchableOpacity style={{
            backgroundColor: "#00acee",
            height: 50,
            width: 50,
            borderRadius: 999,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 20,
            right: 20
        }}>
            <Ionicons name="mail-unread-outline" color="#FFF" size={24} />
        </TouchableOpacity>
    )
}

export default CreateMessage

const styles = StyleSheet.create({})
