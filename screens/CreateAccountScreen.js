import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image ,Alert ,ActivityIndicator } from 'react-native';
import axios from 'axios';

const CreateAccountScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    console.log('Signup button pressed');
    if (!name || !email || !phone || !password1 || !password2 || !termsChecked) {
      Alert.alert('Error', 'Please fill in all fields and accept terms and conditions');
      return;
    }

    if (password1 !== password2) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    console.log(name
      )
    
    try {
      setLoading(true); 
      const response = await axios.post('https://weshare-backend-3.onrender.com/register', {
        name: name,
        email: email,
        phone: phone,
        password: password1,
      });
      setLoading(false);
      if (response.status === 201) {
        // Registration successful
        navigation.navigate("LoginScreen1");
        console.log('Signup successful');
      }
      else if(response.status === 400){
        Alert.alert('Error', 'Email already exists');
      }

       else {
        console.log(response);
        const responseData = response.data;
        if (responseData && responseData.error) {
          Alert.alert('Error', responseData.error);
        } else {
          Alert.alert('Error', 'Something went wrong . Please try again later.');
        }
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      console.log(error.response);
      Alert.alert('Error', 'Already user? Pls login');
    }
  };
  return (
    <View style={styles.container}>
       {loading ? ( 
        <ActivityIndicator size="large" color="#008955" />
      ) : (
      <>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <View style={{ height: 20 }} />
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
   <View style={styles.phoneInput}>
  <Image source={require('../asset/Flag.png')} style={styles.flag} />
  <Text style={styles.countryCode}>+91</Text>
  <Text style={styles.separator}>|</Text>
  <TextInput
    style={styles.phoneField}
    placeholder="Phone Number"
    value={phone}
    onChangeText={setPhone}
    keyboardType="phone-pad"
  />
  </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password1}
        onChangeText={setPassword1}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={password2}
        onChangeText={setPassword2}
        secureTextEntry
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setTermsChecked(!termsChecked)} >
          {termsChecked && <Text style={styles.checkboxText}>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>I accept the terms and conditions</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen1')} style={styles.signInLink}>
        <Text style={styles.accountText}>Already have an account?</Text>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
      </>
      )}
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    color: '#008955',
    fontSize: 16,
  },
  checkboxLabel: {
    fontSize: 16,
    color:'#008955',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#008955',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
    textAlign: 'center',
  },
  accountText:{
    fontSize: 16,
    color:'black',
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: '#008955',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  separator: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 6,
  },
  phoneField: {
    flex: 1,
    fontSize: 16,
  },
  
  
});

export default CreateAccountScreen;
