
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Pressable,View } from "react-native"
import Img from '../../assets/beto-shak.jpg';
import Boston from "./Boston";
import { height } from './Home';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function Item() {
    const navigate = useNavigation();
    return (
        <SafeAreaProvider>
        <SafeAreaView>
            <ScrollView>
            <Image source={Img} style={{ height: height / 2 }} />
            <Pressable
                onPress={() => {
                    navigate.goBack();
                }}
                style={styles.backIcon}>
                <AntDesign name="left" size={18} color="white" />
            </Pressable>
            <Boston />

        </ScrollView>
        </SafeAreaView>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        marginTop:10,
        marginLeft:10,
        padding:10

    }
})