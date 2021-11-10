import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, TouchableOpacityBase } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import facebookBanner from './assets/facebook-banner.jpg';

const FaceBookLogin = () => {
    return (
        <>
            <Image source={ facebookBanner } style={{ width: '100%', height: null, aspectRatio: 1600/1002 }}/>
            <SafeAreaView style={ styles.container }>
                <View style={ styles.content }>
                    <View>
                        <TextInput style={ styles.input } placeholder='Số điện thoại hoặc email'/>
                        <TextInput style={ styles.input } placeholder='Mật khẩu' secureTextEntry={ true }/>

                        <TouchableOpacity style={ styles.button }>
                            <Text style={ styles.buttonText }>Đăng nhập</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ styles.buttonAction }>
                            <Text style={{ color: '#1693f2' }}>Quên mật khẩu?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ styles.buttonAction }>
                            <Text style={{ color: '#1693f2' }}>Quay lại</Text>
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
        </>
    )
}
 
const TEXT = {
    color: '#fff',
    textAlign: 'center'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    content: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 30,
        justifyContent: 'space-between'
    },

    input: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 1,
        borderColor: '#8f9ca6',
        borderWidth: 0.2,
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

    buttonAction: {
        marginTop: 10,
        height: 30,
        alignSelf: 'center',
        justifyContent: 'center'
    }
})
  
  export default FaceBookLogin