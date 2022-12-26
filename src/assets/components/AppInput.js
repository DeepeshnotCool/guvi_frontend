import { useFormikContext } from 'formik';
import React from 'react';
import {StyleSheet, Dimensions, TextInput, Text} from 'react-native';

const AppInput = ({name, placeholder, ...rest}) => {
    const {
        errors,
        values,
        touched,
        handleBlur,
        handleChange,
    } = useFormikContext()

    const value = values[name]
    const error = errors[name]
    const isInputTouched = touched[name]

    return (
        <>
        {error && isInputTouched ? <Text style={{color:'red', paddingVertical: 3}}>{error}</Text> : null}
        <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={handleChange(name)}
            onBlur={handleBlur(name)}
            style={styles.input}
            {...rest}
        />
        </>
    );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    input:{
        height: 50,
        width: width - 10,
        fontSize: 20,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#eae9e7',
        marginBottom: 20,
        color: '#8469cf',
    },
})

export default AppInput;
