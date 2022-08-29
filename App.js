import { StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import RootNavigation from '@navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

  useEffect(() => {
    EStyleSheet.build();
    StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle('dark-content')
  }, []);


  return (
    <PaperProvider>
      <RootNavigation />
    </PaperProvider>
  )
}

export default App;