import { View, Text, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const ProductCard = () => {
  return (
    <View style={{width: 150, borderColor: '#ccc8c8', borderWidth: 0.5, height: 200, padding: moderateScale(10)}}>
      <Image style={{height: 100, width: 100, alignSelf: 'center'}} source={require('@assets/images/veg.png')} />
      <Text>
        Vegetable
      </Text>
      <Text style={{fontSize: moderateScale(16), fontWeight: '600', color: '#000'}}>
        Sainsbury's Broccoli 500gm
      </Text>

      <Text> 
        Rs 50
      </Text>
    </View>
  )
}

export default ProductCard