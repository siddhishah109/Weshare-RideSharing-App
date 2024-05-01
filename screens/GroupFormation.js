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
      // console.error('Error fetching groups:', error);
    }
    finally {
      setLoading(false);
    }
  };
  fetchGroups();
}, [email, fromlatitude, fromlongitude, tolatitude, tolongitude]); 

const handleGroupClick = (groupId, users) => {
  console.log('Group clicked:', groupId, users);
  navigation.navigate('GroupSelectionScreen', { groupId,email, users });
};

  return (
    <View style={styles.container}>
     <View>
     <TouchableOpacity onPress={() => navigation.goBack()}style={styles.backButton} >
    <Text style={styles.backButtonText}>{'Back'}</Text>
    
    </TouchableOpacity>
    <Text style={styles.heading}>Available Groups</Text>
     </View>
     
      {loading ? ( 
        <ActivityIndicator size="large" color="#008955" />
      ) : (
      groups.map(group => (
          <View style={styles.group} key={group.group_id} >
           
            <View style={styles.groupName}> 
            <Text style={styles.groupName1}>{`Group ${group.group}`}</Text>
            </View>
            {group.users.map(user => (
              <View key={user.email} >
                <Text style={styles.texte}>{`Email: ${user.email}`}</Text>
                <Text>{`Preferences: ${user.preferences.join(', ')}`}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.button} onPress={() => handleGroupClick(group.group_id, group.users)}>
              <Text style={styles.buttonText}>View Group</Text>
            </TouchableOpacity>
          </View>
    
      ))
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: '#008955',
    left:13,
    top: 10,
    padding:10,
    borderRadius: 10,
    zIndex:9999,
  },
  backButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight:10
  },
  groupName:{
    fontSize: 20,
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    display : 'flex',
    alignItems: 'center',
    width: '300',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  groupName1:{
    fontSize: 17,
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    display : 'flex',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#008955',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 130,
    marginTop: 15,
  },
  texte:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  group: {
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#008955',
    borderRadius: 10,
    backgroundColor: '#E2F5ED',
    position: 'relative', 
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    margin:10,
    display: 'flex',
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
