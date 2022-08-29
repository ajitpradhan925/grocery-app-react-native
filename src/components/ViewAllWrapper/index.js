import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from '@react-navigation/native';

const ViewAllWrapper = ({ children }) => {
  const { colors } = useTheme();

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontSize: moderateScale(18), fontWeight: '600', color: '#000' }}>
            Popular Prodducts
          </Text>

          <Text style={{ fontSize: moderateScale(14), marginTop: moderateScale(2) }}>
            Fresh product from our garden
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: moderateScale(5), fontWeight: 'bold', color: '#000' }}>
            See all
          </Text>
          <Icon color={colors.primary} name="arrow-forward-circle" size={28} />
        </View>

      </View>

      <View style={{marginTop: moderateScale(20)}}>
        {children}
      </View>
    </View>
  )
}

export default ViewAllWrapper;