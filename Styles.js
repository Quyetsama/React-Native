import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#109dcc'
    },

    viewTop: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'red'
    },

    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 21, 
        marginTop: 10
    }, 

    content: {
        flex: 9,
        backgroundColor: '#fff'
    }, 

    label: {
        color: '#a1abad',
        fontSize: 15,
        marginTop: 15
    },

    input: {
        height: 45,
        marginTop: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#a1abad',
        paddingHorizontal: 20
    }, 

    button: {
        backgroundColor: '#3a8cc9',
        height: 45, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 30,
        borderRadius: 10
    }
})