import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

const FormContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.logo}
          source={require('../components/guvi_logo.png')}
        />
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    },
    logo:{
        marginTop: 30,
        height: 150,
        width: 250,
        resizeMode: 'contain',
        marginBottom: 0,
        alignSelf: 'center',
    },
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
    btnContainer: {
        height: 50,
        width: width - 10,
        borderRadius: 8,
        backgroundColor: '#00D100',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitle:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    linkText:{
        fontSize: 16,
        color: 'grey',
    },
    linkContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})


export default FormContainer;


