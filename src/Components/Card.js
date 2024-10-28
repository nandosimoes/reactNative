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
        // width : 200,
        // height : 300,
        padding : 10,
        margin: 20,
        borderRadius : 5,
        elevation : 3,
        shadowColor : '#00',
        shadowOpacity : 0.2,
        // borderWidth : 1,
        // justifyContent : 'space-between',
        // alignItems : 'center'
    },
    cardTitle : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    cardContent : {
        fontSize : 15,
        // fontWeight : 'bold'
    }
})