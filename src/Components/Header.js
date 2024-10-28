import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default function Header() {
  return (
    <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>
            InfoSass
        </Text>
    </View>
  )
}

const estilos = StyleSheet.create({
    topo : {
        display:"flex",
        justifyContent:"center",
        width: "100%",
        height: 120,
        backgroundColor : "#000000"
    },
    tituloHeader: {
        fontSize: 30,
        width: "100%",
        color: "white",
        textAlign: "center"
    }
})