import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button, Platform, Switch, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import traffic from './assets/traffic-light.png';
import trafficRed from './assets/traffic-light-red.png';
import trafficGreen from './assets/traffic-light-green.png';
import trafficYellow from './assets/traffic-light-yellow.png';

import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


const TheLight = () => {
    
    const turnOn = (color) => {
        setColor(color)
    }

    const [color, setColor] = useState('')

    let imgSource = traffic

    if(color === 'red'){
        imgSource = trafficRed
    }
    else if(color === 'yellow'){
        imgSource = trafficYellow
    }
    else if(color === 'green'){
        imgSource = trafficGreen
    }

    return (
        <SafeAreaView style={ styles.container }>
            <Image source={ imgSource } style={ styles.image }/>

            <View style={ styles.action }>
                <TouchableHighlight
                    style={[ styles.button, { backgroundColor: 'red' } ]}
                    activeOpacity={0.6}
                    underlayColor='#fff'
                    onPress={ () => turnOn('red') }>
                    <Text style={ styles.text }>Red</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[ styles.button, { backgroundColor: 'orange' } ]}
                    activeOpacity={0.6}
                    underlayColor='#fff'
                    onPress={ () => turnOn('yellow') }>
                    <Text style={ styles.text }>Yellow</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[ styles.button, { backgroundColor: 'green' } ]}
                    activeOpacity={0.6}
                    underlayColor='#fff'
                    onPress={ () => turnOn('green') }>
                    <Text style={ styles.text }>Green</Text>
                </TouchableHighlight>
            </View>
            
        </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    text:{
        color: '#fff', 
        textAlign: 'center'
    },

    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'black'
    },

    action: {
        flex:0.5,
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },

    image: {
        flex: 1,
        maxWidth: '100%',
        maxHeight: '100%',
        resizeMode: 'contain'
    },

    button: {
        width: '21%', 
        height: 30, 
        justifyContent: 'center', 
        borderRadius: 5
    }
})

export default TheLight