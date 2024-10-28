import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

export default function Faq() {

    const [faq, setFaq] = useState([]);

    const listFaq = () => {
        axios
    .get("http://10.0.2.2:3000/faq")
    .then((resposta) => {
      setFaq(resposta.data)
    })
    .catch((error) => {
      console.error("Erro ao buscar faq", error)
    })
    }

    useEffect(() => {
        listFaq();
      }, [])
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Faq</Text>

        {faq.length > 0 ? (
        faq.map((faq, index) => (
          <View key={index} style={styles.contatoItem}>
            <Text>{faq.pergunta}</Text>
            <Text>{faq.resposta}</Text>
            </View>
        ))
      ) : (
        <Text style={styles.noContacts}>Nenhum contato disponivel</Text>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      padding: 10,
      // backgroundColor: 'black',
    },
    title : {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10
    },
    contatoItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc"
    },
    noContacts: {
      fontSize: 16,
      color: 'gray',
      textAlign: 'center',
      marginTop:20
    }
  })