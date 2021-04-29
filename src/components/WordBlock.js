import React from 'react';
import {Text, View, StyleSheet} from "react-native";

export function WordBlock({word, description}) {
    return (
        <View style={styles.block}>
            <Text style={styles.word}>{word}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

export function WordBlockHidden({edit, del}) {
    return (
        <View style={[styles.block, styles.behind]}>
            <Text>Edit</Text>
            <Text>Delete</Text>
        </View>
    );
};


const styles = StyleSheet.create({
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
