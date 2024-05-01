import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RiderLogin = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }
    navigation.navigate("RiderScreen");
    console.log('Login button pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Rider Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.orLine} />
      </View>
      <View style={styles.socialSignup}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../asset/Gmail.png')} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Signup with Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../asset/Facebook.png')} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Signup with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../asset/Apple.png')} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Signup with Apple</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccountScreen')} style={styles.signInLink}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text style={styles.signInText}>Sign up</Text>
      </TouchableOpacity>
    </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#008955',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
    fontSize:16,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#008955',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:40 ,
    marginBottom:40,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ced4da',
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 16,
    color: '#495057',
  },
  socialSignup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    width: '100%',
  },
  socialButton: {
    backgroundColor: 'white',
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignContent:'center',
  },
  socialButtonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',

  },
  socialIcon:{
    alignItems:'center',
    marginHorizontal:40,
  },
  signInLink: {
    marginTop: 20,
  },
  signInText: {
    color: '#008955',
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',

  },
  accountText:{
    fontSize: 16,
    color:'black',
  },
});

export default RiderLogin;

