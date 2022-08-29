import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const SliderItem = ({ item }) => {
    console.log("item ", item);
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    slide: {
        flex: 1
    },
    title: {

    },
    text: {

    }
});

export default SliderItem;