import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { SignupSchema } from './validation';
import FormField from './FormField';
import { styles } from './Styles';


const Register = () => {

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    // const submitForm = () => {
    //     console.log(firstName, lastName)
    // }

    function onSubmitHandler(values){
        Alert.alert(
            'Register successfully!',
            'Form data: ' + JSON.stringify(values),
            [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        )
    }

    function isFormValid(isValid, touched) {
        // console.log(isValid + ' ' + Object.keys(touched).length)
        return isValid && Object.keys(touched).length !== 0
    }

    return (
        <SafeAreaView style={ styles.container }>
            <StatusBar style='light'/>
            <View style={ styles.viewTop }>
                    <Text style={ styles.title }>Register</Text>
            </View>

            <View style={ styles.content }>
                <KeyboardAwareScrollView 
                    style={{ paddingHorizontal: 21 }}
                    extraScrollHeight={ 100 } 
                    keyboardShouldPersistTaps='handled'
                >
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', passWord: '', rePassWord: '' }}
                        validationSchema={ SignupSchema }
                        onSubmit={ onSubmitHandler }
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid  }) => (
                            <>
                                
                                <FormField 
                                    label='First Name' 
                                    field='firstName'
                                    handleChange={ handleChange } 
                                    handleBlur={ handleBlur }
                                    values={ values }
                                    errors={ errors }
                                    touched={ touched }
                                />           

                                <FormField 
                                    label='Last Name' 
                                    field='lastName'
                                    handleChange={ handleChange } 
                                    handleBlur={ handleBlur }
                                    values={ values }
                                    errors={ errors }
                                    touched={ touched }
                                    autoCapitalize="words"
                                />  
                                
                                <FormField 
                                    label='Email' 
                                    field='email'
                                    handleChange={ handleChange } 
                                    handleBlur={ handleBlur }
                                    values={ values }
                                    errors={ errors }
                                    touched={ touched }
                                    autoCapitalize="words"
                                /> 
                                
                                <FormField 
                                    label='Password' 
                                    field='passWord'
                                    handleChange={ handleChange } 
                                    handleBlur={ handleBlur }
                                    values={ values }
                                    errors={ errors }
                                    touched={ touched }
                                    secureTextEntry={ true }
                                /> 
                                
                                <FormField 
                                    label='Confirm Password' 
                                    field='rePassWord'
                                    handleChange={ handleChange } 
                                    handleBlur={ handleBlur }
                                    values={ values }
                                    errors={ errors }
                                    touched={ touched }
                                    secureTextEntry={ true }
                                /> 

                                <TouchableOpacity 
                                    disabled={ !isFormValid(isValid, touched) }
                                    onPress={ handleSubmit }
                                >
                                    <View
                                        style={[ styles.button, { opacity: isFormValid(isValid, touched) ? 1 : 0.5 } ]} 
                                    >

                                        <Text>SUBMIT</Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}
                        
                    </Formik>
                </KeyboardAwareScrollView>
            </View>
            
            
        </SafeAreaView>
    );
}




export default Register;