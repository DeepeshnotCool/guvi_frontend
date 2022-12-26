import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./src/assets/navigation/AuthNavigation";

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#fff" },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;



// import * as React from 'react';
// import {View, StyleSheet, KeyboardAvoidingView, Image, TextInput, Dimensions, Pressable, Text, ScrollView} from 'react-native';

// const App = () => {
//   return <KeyboardAvoidingView style = {styles.container}>
//     <ScrollView showsVerticalScrollIndicator={false}>
//     <Image style = {styles.logo} source={require('./src/assets/guvi_logo.png')}/>
//     <TextInput placeholder='Ghost Rider' style={styles.input} />
//     <TextInput placeholder='example@email.com' style={styles.input} />
//     <TextInput placeholder='********' style={styles.input} />
//     <Pressable style={styles.btnContainer}>
//       <Text style={styles.btnTitle}>Login</Text>
//     </Pressable>
//     <View style= {styles.linkContainer}>
//     <Pressable>
//       <Text style={styles.linkText}>Signup</Text>
//     </Pressable>
//     <Pressable>
//       <Text style={styles.linkText}>Forget Password</Text>
//     </Pressable>
//     </View>

//   </ScrollView>
//   </KeyboardAvoidingView>
// }

// const {width, height} = Dimensions.get('window');
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   logo:{
//     marginTop: 30,
//     height: 150,
//     width: 250,
//     resizeMode: 'contain',
//     marginBottom: 0,
//     alignSelf: 'center',
//   },
//   input:{
//     height: 50,
//     width: width - 10,
//     fontSize: 20,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     backgroundColor: '#eae9e7',
//     marginBottom: 20,
//     color: '#8469cf',
//   },
//   btnContainer: {
//     height: 50,
//     width: width - 10,
//     borderRadius: 8,
//     backgroundColor: '#00D100',
//     marginBottom: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnTitle:{
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   linkText:{
//     fontSize: 16,
//     color: 'grey',
//   },
//   linkContainer:{
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
// })

// export default App;
