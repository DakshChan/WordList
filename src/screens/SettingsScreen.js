import React from 'react';
import {FlatList, SafeAreaView, Text, View} from "react-native";
import {Header} from "../components/Header";

export default function SettingsScreen() {
    return (
        <SafeAreaView>
            <Header name={"Settings"}/>
        </SafeAreaView>
    );
}
