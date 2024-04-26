import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const GroupScreen = ({ navigation }) => {
  const [groups] = useState([
    { id: 1, name: 'Group 1', details: 'Ishika Jain, Rohan Shah, Krishi Shah ', image: require('../asset/auto.png') },
    { id: 2, name: 'Group 2', details: 'Ishika Jain, Deep Metha , Khushi Joshi', image: require('../asset/auto.png') },
    { id: 3, name: 'Group 3', details: 'Ishika Jain, Bhuvan Jain, Khushi Joshi', image: require('../asset/auto.png') }
  ]);

  const handleGroupClick = (groupId) => {
    // Handle navigation or any other action
    console.log(`Clicked on Group ${groupId}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Available Groups for Ride</Text>
      {groups.map(group => (
        <TouchableOpacity key={group.id} onPress={() => handleGroupClick(group.id)}>
          <View style={styles.group}>
            <Text style={styles.groupName}>{group.name}</Text>
            <Text>{group.details}</Text>
            <Image source={group.image} style={styles.groupImage} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GroupSelectionScreen', { groupId: group.id })}>
              <Text style={styles.buttonText}>View Group</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
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
