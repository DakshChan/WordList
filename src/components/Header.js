import React from 'react';
import {Text, View, StyleSheet} from "react-native";

export function Header({name}) {
    return (
        <View style={styles.header}>
            <Text style={styles.font}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#615fff',
        paddingHorizontal: 20,
    },
    font: {
        fontSize: 50,
    },
});
