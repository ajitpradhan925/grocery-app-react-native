import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainAuth from '@navigation/MainAuth'
import {MyLightTheme} from '@assets/themes';

const RootNavigation = () => {
  return (
    <NavigationContainer theme={MyLightTheme}>
        <MainAuth />
    </NavigationContainer>
  )
}

export default RootNavigation