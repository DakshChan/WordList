import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from "./src/screens/SettingsScreen";
import WordBlock from "./src/components/WordBlock";

const Tab = createBottomTabNavigator();

export default function App() {
    const [words, setWords] = useState([
        {word:'hello', description:'nothing', key:'1'},
        {word:'hello2', description:'hihi', key:'2'},
        {word:'hello3', description:'byebye', key:'3'}
        ]);

    return (
        <View>
            <HomeScreen words={words} setWords={setWords}/>
            <StatusBar/>
        </View>

    );
}

/*<NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Home" children={() => <HomeScreen words={words} setWords={setWords}/>}/>
        <Tab.Screen name="Settings" children={() => <SettingsScreen words={words} setWords={setWords}/>}/>
    </Tab.Navigator>
    <StatusBar/>
</NavigationContainer>*/
