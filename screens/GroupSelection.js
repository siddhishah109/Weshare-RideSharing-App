import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GroupSelectionScreen = ({ navigation ,route}) => {
  const { groupId,email, users } = route.params;
  const [specifications] = useState([
    { id: 1, label: 'Year', value: '2024' },
    { id: 2, label: 'Seat', value: '4' },
    { id: 3, label: 'Distance', value: '20 km' }
  ]);

  const handelAccept = () => {
    navigation.navigate('ThankyouScreen');
  };
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity> */}
      <Text style={styles.heading}>VIEW GROUP</Text>

     
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
    backgroundColor: '#FF6347', // Tomato color
  },
  acceptButton: {
    marginLeft: 5,
    backgroundColor: '#008000', // Green color
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default GroupSelectionScreen;