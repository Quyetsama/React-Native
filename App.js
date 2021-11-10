import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button, Platform } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import bulbOn from './assets/bulb-on.png';
import bulbOff from './assets/bulb-off.png';

import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const os = Platform.OS

const TheLight = () => {
    
    return (
        <SafeAreaView style={ styles.container }>
            <Image source={ bulbOn } style={ styles.image }/>

            <View style={{ flex:0.2, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title={"Bật / tắt đèn " + os}
                    color={ Platform.OS === "android" ? "#841584" : "blue"}
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            
        </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },

    image: {
        flex: 1,
        // maxWidth: '100%',
        // maxHeight: '100%',
        // resizeMode: 'contain',
        backgroundColor: 'red',
        width: windowWidth,
        height: (windowWidth * 925) / 631
    }
})

export default TheLight