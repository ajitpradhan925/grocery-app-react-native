import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { offers } from '@utils/const'
import { moderateScale } from 'react-native-size-matters'

const OfferSlider = () => {

    const renderItem = (item) => {
        return (
            <View>
                <Image source={item.image} resizeMode="stretch" style={{ width: 280, height: 160, marginRight: moderateScale(10), borderRadius: moderateScale(5)}} />
            </View>
        )
    }

    return (
        <ScrollView horizontal={true}>
            {
                offers.map((item, index) => {
                    return renderItem(item)
                })
            }
        </ScrollView>
    )
}

export default OfferSlider;