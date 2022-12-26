import React from 'react';
import SubmitButton from './SubmitButton';
import FormContainer from './FormContainer';
import AppInput from './AppInput';
import FormNavigator from './FormNavigator';
import {StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { navigateToForgotPassword, navigateToSignup } from '../../../utils/helper';
import CustomFormik from './customFormik';
import * as yup from "yup";
import { signin } from '../../../utils/auth';


const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  
  const validationSchema = yup.object({
    name: yup.string().trim().required("Name is missing!"),
    email: yup.string().email("Invalid email!").required("Email is missing!"),
    password: yup.string().trim().min(8, "Password is too short").required('Password is missing'),
  });



const Login = () => {
    const navigation = useNavigation();
    
    
    const handleLogin =  async (values, formikActions) => {
        // setTimeout(() => {
        //     console.log(values, formikActions);  
        //     formikActions.setSubmitting(false);  
        // }, 2000)


        const res = await signin(values)
        formikActions.setSubmitting(false)

        if(!res.success)
            return console.log(res.error)
        formikActions.resetForm()
        console.log(res)
    };

    return (
        <FormContainer>
            <CustomFormik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
            >

            <AppInput name ='name' placeholder="Ghost Rider" />
            <AppInput name = 'email' placeholder="example@email.com" />
            <AppInput secureTextEntry name = 'password' placeholder="********" />
            <SubmitButton title='Login'/>
            <FormNavigator onLeftLinkPress={navigateToSignup(navigation)} onRightLinkPress={navigateToForgotPassword(navigation)} leftLinkText="Signup"  rightLinkText = "Forget Password" />        
            </CustomFormik>
        </FormContainer>
       
    );   
};

const styles = StyleSheet.create({
    container:{},
});


export default Login;