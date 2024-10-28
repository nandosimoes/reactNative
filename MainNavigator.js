import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';
import Contato from './src/Pages/Contato';
import Configuracoes from './src/Pages/Configuracoes';
import Faq from './src/Pages/Faq';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen
            options ={{ headerShown : false }}
             name="Home" 
             component={Home}
            />
            <Stack.Screen
            name = "Sobre"
            component={Sobre}
            />
            <Stack.Screen 
                name = "Contato"
                component={Contato}
            />
            <Stack.Screen
                name = "Configuracoes"
                component={Configuracoes}
            />
            <Stack.Screen 
                name = "Faq"
                component={Faq}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
