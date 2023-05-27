import React from 'react';
import { View, Button, StyleSheet, Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Camera = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    navigation.navigate('speech');
    // console.log(process.memoryUsage());
  };



  return (
    <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../components/guvi_logo.png')}
        />
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subtitle}>To start the therapy, click here:</Text>
      <View style={styles.buttonContainer}>
        <Button 
            title="Start Therapy" 
            onPress={handleNextPress}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}    
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  logo:{
    marginTop: 30,
    height: 150,
    width: 250,
    resizeMode: 'contain',
    marginBottom: 0,
    alignSelf: 'center',
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 30,
    overflow: 'hidden', 
  },
  buttonStyle: {
    backgroundColor: '#00D100', 
    borderRadius: 30,
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Button title="Here" onPress={handleNextPress} />
//     </View>
//   );
// };

export default Camera;
