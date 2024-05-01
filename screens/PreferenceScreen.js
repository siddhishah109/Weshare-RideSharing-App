import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
const branches = ['CS', 'IT', 'DS', 'AI/ML', 'EXTC'];
const roles = ['Student', 'Faculty', 'Admin'];
const years = ['FE', 'SE', 'TE', 'BE', 'any'];
const genders = ['Male', 'Female', 'Others'];
const PreferenceScreen = ({ navigation }) => {

  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedGender, setSelectedGender] = useState(genders[0]);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsername = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString !== null) {
          const userData = JSON.parse(userDataString);
          setUsername(userData.username);
        } else {
          console.log('No user data found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error getting user data from AsyncStorage in preference screen:', error);
      }
    };

    getUsername();
  }, []);

  const handleDone = async () => {
    setLoading(true);
    console.log('Selected Branch:', selectedBranch);
    console.log('Selected Role:', selectedRole);
    console.log('Selected Year:', selectedYear);
    console.log('Selected Gender:', selectedGender);
    const userDatas = {
      email: username,
      branch: selectedBranch,
      role: selectedRole,
      year: selectedYear,
      gender: selectedGender
    };
    try {

      const response = await axios.post('https://weshare-backend-3.onrender.com/preferences', {
        email: username,
        branch: selectedBranch,
        role: selectedRole,
        year: selectedYear,
        gender: selectedGender
      });
      console.log(response.data);
      navigation.navigate('HomeTabs');
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Server responded with status code:', error.response.status);
      } else if (error.request) {
        console.error('No response received from server:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }

      console.error('Network error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
    console.log(userDatas);
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="black" />
        
      </TouchableOpacity>
      <Text style={styles.heading}> Select Preference</Text>
      <View style={styles.body}>
        <View style={styles.viewp}>
        <Text style={styles.textn}>Branch</Text>
        <Picker
          selectedValue={selectedBranch}
          onValueChange={(itemValue, itemIndex) => setSelectedBranch(itemValue)}
        >
          {branches.map(branch => (
            <Picker.Item key={branch} label={branch} value={branch} />
          ))}
        </Picker>
        </View>
        <View style={styles.viewp}>
          <Text style={styles.textn}>Role</Text>
          <Picker
            selectedValue={selectedRole}
            onValueChange={(itemValue, itemIndex) => setSelectedRole(itemValue)}
          >
            {roles.map(branch => (
              <Picker.Item key={branch} label={branch} value={branch} />
            ))}
          </Picker>
        </View>
        <View style={styles.viewp}>
          <Text style={styles.textn}>Year</Text>
          <Picker
            selectedValue={selectedYear}
            onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
          >
            {years.map(branch => (
              <Picker.Item key={branch} label={branch} value={branch} />
            ))}
          </Picker>
        </View>
        <View style={styles.viewp}>
          <Text style={styles.textn}>Gender</Text>
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
          >
            {genders.map(branch => (
              <Picker.Item key={branch} label={branch} value={branch} />
            ))}
          </Picker>
        </View>
      </View >
      <TouchableOpacity onPress={handleDone}>
        <View style={styles.q}>
          {loading ? ( // Render loader if loading state is true
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.ptext}>Done</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',

  },
  backButton: {
    marginLeft: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'black',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    marginLeft: 10,
    marginTop: 30,
  },
  ptext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  q: {
    height: 50,
    width: 315,
    marginTop: 10,
    left: 30,
    borderRadius: 10,
    backgroundColor: '#008955',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    margin: 15,

  },
  textn:{
    fontSize: 16,
    fontWeight: 'bold',
    // color: 'black',

  },
  viewp:{
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    elevation: 5,
  }



});



export default PreferenceScreen

