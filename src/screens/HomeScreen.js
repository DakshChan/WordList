import React from 'react';
import {Text, View, FlatList, SafeAreaView, StyleSheet} from "react-native";

import {SwipeListView} from "react-native-swipe-list-view";

import {WordBlock, WordBlockHidden} from "../components/WordBlock";
import {Header} from "../components/Header";
import {PlusButton} from "../components/Buttons";

export default function HomeScreen({words, setWords}) {
    const renderItem = (data) => <WordBlock word={data.item.word} description={data.item.description} />;

    return (
        <SafeAreaView style={styles.screen}>
            <Header name={"Home"}/>
            {/*<FlatList data={words} renderItem={renderItem}/>*/}
            <SwipeListView
                data={words}
                renderItem={ (data, rowMap) => (
                    <WordBlock word={data.item.word} description={data.item.description} />
                )}
                renderHiddenItem={ (data, rowMap) => (
                    <WordBlockHidden/>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
            />
            <View style={styles.button}>
                <PlusButton/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#E5E7EB',
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
