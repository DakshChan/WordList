import React from 'react';
import {Text, View, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, useColorScheme} from "react-native";

import {SwipeListView} from "react-native-swipe-list-view";

import {WordBlock, WordBlockHidden} from "../components/WordBlock";
import {Header} from "../components/Header";
import {PlusButton} from "../components/Buttons";

export default function HomeScreen({words, setWords}) {
    const renderItem = (data) => <WordBlock word={data.item.word} description={data.item.description} />;
    const colorScheme = useColorScheme();
    const style = colorScheme === 'light' ? styles.light : styles.dark;

    return (
        <SafeAreaView style={[styles.screen, style]}>
            <Header name={"Home" + colorScheme}/>
            <SwipeListView
                data={words}
                renderItem={ (data, rowMap) => (
                    <WordBlock word={data.item.word} description={data.item.description}/>
                )}
                renderHiddenItem={ (data, rowMap) => (
                    <WordBlockHidden/>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
            />
            <TouchableOpacity style={styles.button}>
                <PlusButton/>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    dark: {
        backgroundColor: '#2b2b2b',
    },
    light: {
        backgroundColor: '#E5E7EB',
    },
    screen: {
        height: '100%',
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: 30,
        right: 30,
    },
})
