import React from 'react'
import { View, Text, styleSheet, Button, Alert, Image } from 'react-native'

import logo from './src/images/logo.png'
import styles from './src/styles'

const btnPress = () =>{
  
  let randomNumber = Math.random()
  let phrases = [
    "Enfrente os problemas e leve a melhor!",
    "Dê mais atenção ao que você tem de bom na sua vida",
    "Para chegar ao topo, o que importa é começar!",
    "De nada adianta ter sonhos, se você não se empenhar em correr atrás",
    "Preste atenção nas oportunidades que estão à sua frente!"
  ]

  randomNumber = Math.floor(randomNumber * 5)
  let chosenPhrase = phrases[ randomNumber ]

  Alert.alert('Pensamento do Dia',chosenPhrase)

}

const App = () =>{
  return(
    <View style={styles.container} >
      <View style={styles.boxLogo} >
        <Image source={logo} />
      </View>
      <View style={styles.boxBtn} >
        <Button title="A Frase DO DIA É" onPress={btnPress} color="#00b33c" />
      </View>
    </View>
  );
}

export default App;