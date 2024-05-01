import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,ActivityIndicator } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const GroupSelectionScreen = ({ navigation ,route}) => {
  const { groupId, email, users } = route.params;
  const [loading, setLoading] = useState(false);
  const [heartColor, setHeartColor] = useState('black');
  const [buttonClicked, setButtonClicked] = useState(false);

  const [specifications] = useState([
    { id: 1, label: 'Year', value: '2024' },
    { id: 2, label: 'Seat', value: '4' },
    { id: 3, label: 'Distance', value: '20 km' }
  ]);

  const handelAccept = async () => {
    setLoading(true);
    const usersData = users.map(({ email }) => ({ email, status: 'pending', role: 'M' }));

    const groupData = {
      group_id: groupId,
      users: [
        { email, status: 'approved', role: 'L' },
        ...usersData
      ]
    };
  
    console.log('Group Data:', groupData);
    try {
      const response = await axios.post('https://weshare-backend-3.onrender.com/create-group', groupData);

      console.log(response.data.message);
      navigation.navigate('WaitingScreen',{
        groupId: groupId
      });
    } catch (error) {
      console.error('Error creating group:', error);
    }finally {
      setLoading(false);
    }
  };

  const handleHeartClick = async () => {
    if (!buttonClicked) {
      setButtonClicked(true);
      setHeartColor('red'); 
      setLoading(true);
      try {
        const response = await axios.post('https://weshare-backend-3.onrender.com/add-favorite-group', {
          user: email,
          member1: users[0].email,
          member2: users[1].email
        });

        console.log(response.data.message);
      } catch (error) {
        console.error('Error adding favorite group:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
      <Text style={styles.heading}>VIEW GROUP</Text>
      <TouchableOpacity style={styles.icon}  onPress={handleHeartClick} disabled={buttonClicked}>
          <Icon name="heart" size={25} color={heartColor} style={styles.heart} />
        </TouchableOpacity>
      </View>

     
      <View style={styles.padding} />

  
      <Text style={styles.sectionTitle}>Specification</Text>

      <View style={styles.specContainer}>
        {specifications.map(spec => (
          <View key={spec.id} style={styles.specItem}>
            <Text style={styles.specLabel}>{spec.label}</Text>
            <Text style={styles.specValue}>{spec.value}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Group Members</Text>

      <View style={styles.section}>
          <View style={styles.memberBox}>
            <Text style={styles.memberText}>{email}</Text>
          </View>
         {users.map((user, index) => (
          <View key={index} style={styles.memberBox}>
            <Text style={styles.memberText}>{user.email}</Text>
          </View>
        ))}
      </View>
      {loading && <ActivityIndicator style={styles.loader} size="large" color="#008000" />}

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.declineButton]}onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={handelAccept}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  top:{
    zIndex:9999,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    backgroundColor:'white',
  },
  icon:{
    padding:10,
    borderRadius:50,
    marginLeft:10,
  
  },
  heart:{
  borderColor: 'black',
  backgroundColor: 'white',
  // color: 'black',
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'black',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  padding: {
    height: 20,
  },
  specContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  specItem: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#008955',
    borderRadius: 10,
    backgroundColor: '#E2F5ED',
    marginRight: 10,
  },
  specLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specValue: {},
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  memberBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#008955',
    borderRadius: 10,
    backgroundColor: '#E2F5ED',
    marginBottom: 10,
  },
  memberText: {},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  declineButton: {
    marginRight: 5,
    backgroundColor: '#FF6347',
  },
  acceptButton: {
    marginLeft: 5,
    backgroundColor: '#008000', 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default GroupSelectionScreen;