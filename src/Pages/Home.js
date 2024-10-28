import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../Components/Card";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seja bem-vindo!</Text>
      
      <Card
        title="Sobre"
        content="Saiba mais sobre nós e nossos serviços."
        buttonText="Ir para Sobre"
        onPress={() => navigation.navigate("Sobre")}
      />

      <Card
        title="Contato"
        content="Clique abaixo para entrar em contato."
        buttonText="Ir para o Contato"
        onPress={() => navigation.navigate("Contato")}
      />

      <Card
        title="Configurações"
        content="Clique para ir para as configurações"
        buttonText="Ir para Configurações"
        onPress={() => navigation.navigate("Configuracoes")}
      />

      <Card
        title="FAQ"
        content="Para perguntas e respostas."
        buttonText="Ir para FAQ"
        onPress={() => navigation.navigate("Faq")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
  },
  subtitulo: {
    fontSize: 20,
    color: "#31a140",
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
  }
});
