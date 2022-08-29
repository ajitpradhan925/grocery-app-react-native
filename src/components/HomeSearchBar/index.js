import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/dist/Ionicons';

const HomeSearchBar = () => {
  return (
    <View style={{height: moderateScale(45), backgroundColor: '#f0f4f9', borderRadius: moderateScale(40), flexDirection: 'row', alignItems: 'center', paddingHorizontal: moderateScale(12)}}>
        <Icon name="search-outline" size={20} color="#606061" />
      <Text style={{ marginLeft: moderateScale(5), color: '#c2c6cc', fontWeight: 'bold', fontSize: 14 }}>Try "Tomatos"</Text>
    </View>
  )
}

export default HomeSearchBar