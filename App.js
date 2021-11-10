import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const FaceBookLogin = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.content }>
                <View>
                    <TextInput style={ styles.input } placeholder='Số điện thoại hoặc email'/>

                    <TouchableOpacity style={ styles.button }>
                        <Text style={ styles.buttonText }>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: '70%' }}>
                        <View style={{ width: 30, flex: 1, height: 1, borderWidth: 0.5, borderColor: '#8f9ca6' }}></View>
                        <Text style={{ width: 50, textAlign: 'center' }}>Hoặc</Text>
                        <View style={{ width: 30, flex: 1, height: 1, borderWidth: 0.5, borderColor: '#8f9ca6' }}></View>
                    </View>
                    <TouchableOpacity style={[ styles.button, styles.buttonRegister ]}>
                        <Text style={ styles.buttonTextRegister }>Tạo tài khoản mới</Text>
                    </TouchableOpacity>
                </View>       
            </View>
        </SafeAreaView>
    )
}
 
const TEXT = {
    color: '#fff',
    textAlign: 'center'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight
    },

    content: {
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 30,
        justifyContent: 'space-between'
    },

    input: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 3,
        borderColor: '#8f9ca6',
        borderWidth: 0.5,
        paddingHorizontal: 30, 
        color: '#8f9ca6'
    },

    button: {
        height: 50,
        backgroundColor: '#1693f2',
        borderRadius: 6,
        marginTop: 15,
        justifyContent: 'center'
    }, 

    buttonText: {
        ...TEXT
    }, 

    buttonRegister: {
        backgroundColor: '#dae9f5',
        marginBottom: 30
    },

    buttonTextRegister: {
        ...TEXT, 
        color: '#1693f2'
    },
})
  
  export default FaceBookLogin