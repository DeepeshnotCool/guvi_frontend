import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import FormContainer from "./FormContainer";
import AppInput from "./AppInput";
import FormNavigator from "./FormNavigator";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  navigateToForgotPassword,
  navigateToLogin,
} from "../../../utils/helper";
import { Formik } from "formik";
import * as yup from "yup";
import CustomFormik from "./customFormik";
import { signup } from "../../../utils/auth";


const initialValues = {
  name: "",
  email: "",
  password: "",
  mobile: "",
};

const validationSchema = yup.object({
  name: yup.string().trim().required("Name is missing!"),
  email: yup.string().email("Invalid email!").required("Email is missing!"),
  password: yup
    .string()
    .trim()
    .min(8, "Password is too short")
    .required("Password is missing"),
  mobile: yup.string().trim().required("Mobile is missing!"),
});

const Signup = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState({
    text: '',
    type: '',
  });

  const handleSignup = async (values, formikActions) => {
    const res = await signup({ ...values });
    formikActions.setSubmitting(false);

    if (!res.success) return console.log(res.error);
    formikActions.resetForm();
    console.log(res);

    // setTimeout(() => {
    //     console.log(values, formikActions);
    //     formikActions.setSubmitting(false);
    // }, 2000)
  };

  return (
  
      <FormContainer>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          <AppInput name="name" placeholder="Ghost Rider" />
          <AppInput name="email" placeholder="example@email.com" />
          <AppInput secureTextEntry name="password" placeholder="********" />
          <AppInput name="mobile" placeholder="+91 123-456-7890" />
          <SubmitButton title="Signup" />
          <FormNavigator
            onLeftLinkPress={navigateToLogin(navigation)}
            leftLinkText="Login"
            onRightLinkPress={navigateToForgotPassword(navigation)}
            rightLinkText="Forget Password"
          />
        </CustomFormik>
      </FormContainer>
  
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Signup;
