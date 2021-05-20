import React from 'react';
import {Text, View, StyleSheet, useColorScheme} from "react-native";

export function WordBlock({word, description}) {
    const colorScheme = useColorScheme();
    const style = colorScheme === 'light' ? styles.light : styles.dark;

    return (
        <View style={[styles.block, style]}>
            <Text style={[styles.word, style]}>{word}</Text>
            <Text style={[styles.description, style]}>{description}</Text>
        </View>
    );
};

export function WordBlockHidden({edit, del}) {
    const colorScheme = useColorScheme();
    const style = colorScheme === 'light' ? styles.light : styles.dark;

    return (
        <View style={[styles.block, styles.behind, style]}>
            <Text style={style}>Edit</Text>
            <Text style={style}>Delete</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    dark: {
        backgroundColor: '#505050',
        color: '#fff'
    },
    light: {},
    block: {
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 22,
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    word: {
        fontSize: 24,
    },
    description: {
        fontSize: 14,
    },
    behind: {
        backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    left: {

    },
    right: {

    },
});
