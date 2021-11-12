import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './Styles';


export default function FormField({ label, field, handleChange, handleBlur, values, errors, touched, autoCapitalize, secureTextEntry }) {
    return (
        <View>
            <Text style={ styles.label }>{ label }</Text>
            <TextInput 
                style={ styles.input }
                onChangeText={handleChange( field )}
                onBlur={handleBlur( field )}
                value={values[field]}
                autoCapitalize={ autoCapitalize || 'none' }
                secureTextEntry={ secureTextEntry }
            />

            {errors[field] && touched[field] ? (
                <Text style={{ color: 'red' }}>{errors[field]}</Text>
            ) : null}
        </View>
    )
}