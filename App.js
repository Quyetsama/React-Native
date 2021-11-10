import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button, Platform, Switch } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import bulbOn from './assets/bulb-on.png';
import bulbOff from './assets/bulb-off.png';

import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


const TheLight = () => {
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <SafeAreaView style={ styles.container }>
            <Image source={ isEnabled ? bulbOn : bulbOff } style={ styles.image }/>

            <View style={{ flex:0.2, justifyContent: 'center', alignItems: 'center' }}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
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