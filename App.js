import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const MomoLogin = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <StatusBar style='light'/>

            <View style={ styles.content }>
                <View style={ styles.textWrapper }>
                    <Text style={ styles.hiText }>Xin chào!</Text>
                    <Text style={ styles.userText }>NGUYEN VAN QUYET</Text>
                    <Text style={ styles.userText }>0867985106</Text>
                </View>

                <View style={ styles.form }>
                    <FontAwesome5 name="lock" size={24} color="black" style={ styles.icon } />

                    <TextInput 
                        style={ styles.inputPassword }
                        keyboardType = 'numeric'
                        secureTextEntry={ true }
                        maxLength= '6'
                        autoFocus = { true }
                        placeholder = 'Nhập mật khẩu'
                        placeholderTextColor = '#929292'
                    />

                    <TouchableOpacity style={ styles.buttonLogin }>
                        <Text style={ styles.buttonLoginText }>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>

                <View style={ styles.action }>
                    <TouchableOpacity style={ styles.buttonAction }>
                        <Text style={[ styles.userText, {fontSize: 12} ]}>QUÊN MẬT KHẨU</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.buttonAction }>
                        <Text style={[ styles.userText, {fontSize: 12} ]}>THOÁT TÀI KHOẢN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const TEXT = {
    color: '#fff',
    textAlign: 'center'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b0006d',
        paddingTop: Constants.statusBarHeight
    },

    content: {
        paddingHorizontal: 60
    },

    textWrapper: {
        marginTop: 60,
        marginBottom: 30,
    },

    hiText: {
        ...TEXT,
        fontSize: 20,
        lineHeight: 50,
        fontWeight: 'bold'
    },

    userText: {
        ...TEXT,
        fontSize: 16,
        lineHeight: 30
    },

    form: {
        marginBottom: 30,
    },

    icon: {
        position: 'absolute',
        top: 15,
        left: 25,
        zIndex: 10,
        opacity: 0.7
    },
    
    inputPassword: {
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 28,
        fontSize: 16,
        color: "#929292",
        textAlign: 'center',
        // textAlignVertical: 'center',
        paddingHorizontal: 30
    },

    buttonLogin: {
        backgroundColor: '#8d015a',
        height: 50,
        marginTop: 15,
        borderRadius: 25,
        justifyContent: 'center',
    },

    buttonLoginText: {
        ...TEXT
    },

    action: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default MomoLogin;