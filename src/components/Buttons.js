import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export function PlusButton() {
    return (
        <View style={styles.button}>
            <FontAwesome name='plus' size={40} color="black" style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFB26B',
        borderRadius: 1000,
        width: 60,
        height: 60,
    },
    icon: {
        position: 'absolute',
        width: 50,
        height: 50,
        top: 12,
        left: 14,
    },
});
