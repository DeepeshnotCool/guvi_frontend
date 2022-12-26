import { useNavigation } from "@react-navigation/native";
import React from "react";
import { navigateToLogin, navigateToSignup } from "../../../utils/helper";
import AppInput from "./AppInput";
import FormContainer from "./FormContainer";
import FormNavigator from "./FormNavigator";
import SubmitButton from "./SubmitButton";
import * as yup from "yup";
import CustomFormik from "./customFormik";
import { forgotPassword } from "../../../utils/auth";

const initialValues = {
  email: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email!").required("Email is missing!"),
});

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleForgotPassword = async (values, formikActions) => {
    // setTimeout(() => {
    //     console.log(values, formikActions);  
    //     formikActions.setSubmitting(false);  
    // }, 2000)


    const res = await forgotPassword(values.email)
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
        onSubmit={handleForgotPassword}
      >
        <AppInput name="email" placeholder="example@email.com" />
        <SubmitButton title="Send Link" />
        <FormNavigator
          onLeftLinkPress={navigateToLogin(navigation)}
          leftLinkText="Login"
          onRightLinkPress={navigateToSignup(navigation)}
          rightLinkText="Signup"
        />
      </CustomFormik>
    </FormContainer>
  );
};

export default ForgotPassword;
