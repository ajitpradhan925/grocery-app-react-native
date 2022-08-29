import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const MainWrapper = ({ color = '#fff', scrollBar = false, children }) => {
    if (!scrollBar)
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, padding: moderateScale(17), backgroundColor: color}}>
                    {children}
                </View>
            </SafeAreaView>
        )

    if (scrollBar)
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: color}}>
                <ScrollView style={{flex: 1}}>
                    <View style={{flex: 1, padding: moderateScale(17)}}>
                        {children}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
}

export default MainWrapper