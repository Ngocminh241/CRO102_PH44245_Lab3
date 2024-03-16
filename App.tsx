import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Bai3 from './components/Bai3';



const App = () => {
  return (
      
       <SafeAreaProvider>
     <Bai2/>
       </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})