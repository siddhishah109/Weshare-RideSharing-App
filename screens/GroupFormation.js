import React, { useState ,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator ,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const GroupScreen = ({ route ,navigation }) => {
  const { fromlatitude, fromlongitude, tolatitude, tolongitude } = route.params;
  const [email, setEmail] = useState('');
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUsername = async () => {
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

    getUsername();
}, []);
useEffect(() => {
  const fetchGroups = async () => {
    try {
      const response = await axios.post('https://weshare-backend-3.onrender.com/find-matching-rides', {
        email: email,
        from_latitude: fromlatitude,
        from_longitude: fromlongitude,
        to_latitude: tolatitude,
        to_longitude: tolongitude
      });
      console.log(response.data);
      setGroups(response.data.groups);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };
  fetchGroups();
  fetchGroups();
}, []); 

const handleGroupClick = (groupId, groupMembers) => {
  console.log(`Clicked on Group ${groupId}`);
  navigation.navigate('GroupSelectionScreen', { groupId: groupId, groupMembers: groupMembers });
};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Groups for Ride</Text>
      {loading ? ( // Display loader while loading
        <ActivityIndicator size="large" color="#008955" />
      ) : (
      groups.map(group => (
        <TouchableOpacity key={group.group} onPress={() => handleGroupClick(group.group, group.users.map(user => user.email))}>
          <View style={styles.group}>
            <Text style={styles.groupName}>{`Group ${group.group}`}</Text>
            {group.users.map(user => (
              <View key={user.email}>
                <Text>{`Email: ${user.email}`}</Text>
                <Text>{`Preferences: ${user.preferences.join(', ')}`}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GroupSelectionScreen', { groupId: group.group })}>
              <Text style={styles.buttonText}>View Group</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'black',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 30, // Adjusted for back button
  },
  group: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#008955',
    borderRadius: 10,
    backgroundColor: '#E2F5ED',
    position: 'relative', // Make it relative to allow absolute positioning of the image
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  groupImage: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#008955',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GroupScreen;
