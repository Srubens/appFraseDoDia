import React from 'react'
import { View, Text, styleSheet, Button, Alert, Image } from 'react-native'

import logo from './src/images/logo.png'
import styles from './src/styles'

const App = () =>{
  return(
    <View style={styles.container} >
      <View style={styles.boxLogo} >
        <Image source={logo} />
      </View>
      <View style={styles.boxBtn} >
        <Button title="A Frase DO DIA É" />
      </View>
    </View>
  );
}

export default App;