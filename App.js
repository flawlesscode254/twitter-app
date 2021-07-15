import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import MainStackScreen from './stacks/MainStackScreen'

const App = () => {

  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  )
}

export default App