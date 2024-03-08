import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';


const LoginScreen = ({ navigation }) => {
    
  const handelAccount = () => {
    navigation.navigate('CreateAccountScreen');
  };
  const handellogin = () => {
    navigation.navigate('LoginScreen1');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../asset/welcome.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Have a better sharing experience</Text>
        </View>
      </View>
   
      <TouchableOpacity onPress={handelAccount} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create an account</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={handellogin} >
      <View style={styles.button1}>
        <Text style={styles.buttonText1}>Log In</Text>
      </View>
    </TouchableOpacity>

  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
    },
    image: {
      width: 350,
      height: 270,
      marginBottom: 30,
      marginTop:100
    },
    textContainer: {
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      paddingLeft: 55,
      paddingRight: 55,
      color: 'grey',
    },
    skipButton: {
      position: 'absolute',
      top: 40,
      right: 30,
      color:"black",
      fontWeight:"bold"
    },
    skipText: {
      fontSize: 16,
      color: '#666',
    },
    loginbutton:{
        
      },
      button: {
        backgroundColor: '#008955',
        width: '100%',
        paddingLeft: 80,
        paddingRight: 80,
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        bottom: 100,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
      },
      button1:{
        backgroundColor: '#fff',
        width: '100%',
        paddingLeft: 125,
        paddingRight: 125,
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        borderColor: '#008955',
        borderWidth: 1.5,
        bottom: 70,
      },
      buttonText1: {
        color: '#008955',
        fontSize: 18,
      },

  });

export default LoginScreen;
