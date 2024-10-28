import React, {useEffect, useState} from 'react'
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
export default function Sobre() {
  const [contatos, setContatos] = useState([])

  

  // Função para buscar contatos no servidor

  const listContatos = () => {
    axios
    .get("http://10.0.2.2:3000/contatos")
    .then((resposta) => {
      setContatos(resposta.data)
    })
    .catch((error) => {
      console.error("Erro ao buscar contatos", error)
    })
  }

  const deletarContato = (id) => {
axios.delete (`http://10.0.2.2:3000/contatos/${id}`)
.then(() => {
setContatos(contatos.filter((contato) => contato.id !== id))
Alert.alert("Sucesso, Contato Excluído")
})
.catch((error) => {
  console.log("Erro ao excluir contato", error);
  Alert.alert("Erro, Não foi possível excluir")
  
})
  }

  // Use o useEffect para buscar dados
  useEffect(() => {
    listContatos();
  }, [])

  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.title}>
            Sobre
        </Text>
        <Text>Lista de contatos</Text>
      {contatos.length > 0 ? (
        contatos.map((contato, index) => (
          <View key={index} style={styles.contatoItem}>
            <Text>{contato.nome}</Text>
            <Text>{contato.telefone}</Text>
            <Button 
            title="Excluir"
            color="red"
            onPress={() => deletarContato(contato.id)}
            />
            </View>
        ))
      ) : (
        <Text style={styles.noContacts}>Nenhum contato disponivel</Text>
      )}
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
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