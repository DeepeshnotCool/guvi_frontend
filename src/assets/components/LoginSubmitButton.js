import React from 'react';
import { Pressable, Text, Dimensions, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';
import { useNavigation } from '@react-navigation/native';


const LoginSubmitButton = ({title, navigateToScreen}) => {
    const {handleSubmit, isSubmitting} = useFormikContext();
    const navigation = useNavigation();

    const handlePress = async () => {
        if (!isSubmitting) {
            await handleSubmit();
            navigation.navigate(navigateToScreen);
        }
    }

    return (
        <Pressable onPress={handlePress} style={[styles.submit, {
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



export default LoginSubmitButton;


