import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GroupScreen = ({ navigation }) => {
  const [groups] = useState([
    { id: 1, name: 'Group 1', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Group 2', details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, name: 'Group 3', details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
  ]);

  const handleGroupClick = (groupId) => {
    // Handle navigation or any other action
    console.log(`Clicked on Group ${groupId}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>{'< Back'}</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Available Groups for Ride</Text>
      {groups.map(group => (
        <TouchableOpacity key={group.id} onPress={() => handleGroupClick(group.id)}>
          <View style={styles.group}>
            <Text style={styles.groupName}>{group.name}</Text>
            <Text>{group.details}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GroupDetails', { groupId: group.id })}>
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
    backgroundColor: 'white', // Background color for the entire screen
  },
  backButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  group: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#008955', // Green border color for group boxes
    borderRadius: 10,
    backgroundColor: '#E2F5ED', // Background color for group boxes
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#008955', // Green color for the "View Group" button
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
