import { useFormikContext } from 'formik';
import React from 'react';
import {StyleSheet, Pressable, Text, Dimensions } from 'react-native';

const SubmitButton = ({title}) => {
    const {handleSubmit, isSubmitting} = useFormikContext()
    return (
        <Pressable onPress={isSubmitting ? null : handleSubmit} style={[styles.submit, {
            backgroundColor: isSubmitting ? 'grey' : '#00D100'
        }]}>
            <Text style={styles.btnText}>{title}</Text>
        </Pressable>
    );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    submit: {
        height: 50,
        width: width - 40,
        backgroundColor: '#00D100',
        borderRadius: 8,
        justifyContent: 'center',
        marginLeft: 15,
    },
    btnText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
})

export default SubmitButton;
