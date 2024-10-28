import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Card({title, content, buttonText, onPress}) {
  return (
    <View style={styles.card}>
        <Text style ={styles.cardTitle}>
            {title}
        </Text>
        <Text style = {styles.cardContent}>
            {content}
        </Text>
        <Button 
            title= {buttonText}

            onPress = {onPress}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    card : {
        padding : 10,
        borderRadius : 5,
    },
    cardTitle : {
        fontSize : 20,
        paddingTop : 10,
        fontWeight : 'bold'
    },
    cardContent : {
        fontSize : 15,
    }
})