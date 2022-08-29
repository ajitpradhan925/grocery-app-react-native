import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Badge } from 'react-native-paper';
import { styles } from './styles';

const LocationHeader = () => {
    return (
        <View style={styles().mainContent}>
            <View>
                <View>
                    <Text style={styles().deliveryText}>Delivery Address . Now</Text>
                </View>

                <View style={styles().locationContainer}>
                    <Text style={styles().locationNameText}>Bhubaneswar, Odisha</Text>
                    <Icon size={18} style={{ marginLeft: 5 }} name="chevron-down-outline" />
                </View>
            </View>

            <View style={styles().iconContainer}>
                <Icon size={28} name="cart-outline" />
                <TouchableHighlight>
                    <View style={{ flexDirection: 'row', }}>
                        <Icon size={28} name="notifications-outline" style={styles().icon} />
                        <Badge size={13} style={styles().badge}>4</Badge>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default LocationHeader