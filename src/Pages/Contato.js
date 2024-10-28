import React from 'react'
import { StyleSheet, Text,TextInput, View } from 'react-native'

export default function Contato() {
  return (
    <View>
        <Text>Nome</Text>
        <TextInput placeholder='digite o nome'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5
  }
});