import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { styles } from './styles';

import { Button } from 'react-native-paper';
import { useNavigation, useTheme } from '@react-navigation/native';
import { slides } from '@utils/const';

const Splash = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  const _renderItem = ({ item }) => {
    return (
      <View style={styles().slide}>
        <Image source={item.image} style={styles().image} />
        <Text style={styles().title}>
          {item.title}
        </Text>
        <Text style={styles().text}>
          {item.text}
        </Text>
        <Button style={styles(colors.primary).buttonStyle} mode="contained" onPress={_onEndReached} >
          Get Started
        </Button>
      </View>
    )
  }


  const _onEndReached = () => {
    navigation.navigate('Login');
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      onDone={_onEndReached}
      onSkip={_onEndReached}
      dotClickEnabled={true}
      showNextButton={true}
      showDoneButton={true}
      showSkipButton={true}
      activeDotStyle={{ width: 40, backgroundColor: '#3a9026', }}
    />

  )

}


export default Splash;