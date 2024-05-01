import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-paper';
const ProfileScreen1 = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
 
  useEffect(()=>{
    const getEmail = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString !== null) {
          const userData = JSON.parse(userDataString);
          setEmail(userData.username);
        } else {
          console.log('No user data found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error getting user data from AsyncStorage in preference screen:', error);
      }
    };
    getEmail();
  },[]);

  useEffect(() => {
    const fetchUserData = async () => {

      try {
        //  console.log('Email--------------:', email);
        // console.log('Email:', email);
        const response = await axios.post('https://weshare-backend-3.onrender.com/get-user-details', {
            email: email 
        });
        // console.log('User data:', response.data);
        setUserData(response.data.user_details);
      } catch (error) {
        // console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [email]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userData ? (
        <>
           <Image source={require('../asset/asset2.png')} style={styles.avatar} />
         <View style={styles.flexp}>
         <View style={styles.gp}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{userData.name}</Text></View>
         <View style={styles.gp}>
         <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userData.email}</Text>
         </View>
          <View style={styles.gp}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{userData.phone}</Text>
          </View>
          <View style={styles.gp}>
          <Text style={styles.label}>Branch:</Text>
          <Text style={styles.value}>{userData.branch}</Text>
          </View>
          <View style={styles.gp}>
          <Text style={styles.label}>Role:</Text>
          <Text style={styles.value}>{userData.role}</Text>
          </View>
          <View style={styles.gp}>
          <Text style={styles.label}>Year:</Text>
          <Text style={styles.value}>{userData.year}</Text>
          </View>
          <View style={styles.gp}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{userData.gender}</Text>
          </View>
          </View>
        </>
      ) : (
        <Text style={styles.error}>User details not found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#B9E5D1',
  },
  avatar: {

  },
  flexp: {
    display: 'flex',
    alignItems: 'center',
  },
  gp: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
    width: '75%',
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#52006A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 10,
  },
  value: {
    fontSize: 16,

  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default ProfileScreen1;
