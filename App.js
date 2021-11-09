import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const YourApp = () => {
    return (
        <View style={{ marginTop: 50 }}>
            <Text style={ styles.text }>
                Hello <Text style={{ color: '#e74c3c' }}>World</Text>
            </Text>

            <Text style={ styles.text }>
                Hello{' '}
                <Text style={ styles.text2 }>World</Text>
            </Text>

            <Text style={[ styles.text, { color: '#59595d' } ]}>
                Hello{' '}
                <Text style={{ color: '#fff', backgroundColor: '#59595d' }}>World</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    text2: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: '#2980b9'
    }
})

export default YourApp;
