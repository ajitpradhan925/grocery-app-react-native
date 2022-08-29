import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { categories } from '@utils/const'
import { moderateScale } from 'react-native-size-matters';


const CategorySlider = () => {

    const categoryItem = (category) => {
        const {name, image, id} = category;
        return (
            <View style={{flexDirection: 'column', alignItems: 'center', marginRight: moderateScale(10)}}>
                <View style={{  borderColor: '#c4c4c4', borderWidth: 1, padding: moderateScale(3), borderRadius:  40}}>
                    <Image style={{width: 55, height: 55, borderRadius: 40}} source={image} />
                </View>
                <Text style={{fontSize: moderateScale(12), fontWeight: '500', color: '#000', marginTop: moderateScale(5)}}>{name}</Text>
            </View>
        )

    };

    return (
        <ScrollView horizontal={true}>
            {categories.map((category, index) => {
                return categoryItem(category);
            })}
        </ScrollView>
    )
}

export default CategorySlider