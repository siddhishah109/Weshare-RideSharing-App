import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState('auto');

  const handlePress = (button) => {
    setSelectedButton(button);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../asset/icons/Menui.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../asset/icons/Notificationi.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.preferences}>
          <Text style={styles.ptext}>Preferences </Text>
        </View>
        <View style={styles.pbox}>
          <View style={styles.acbutton}>
            <TouchableOpacity onPress={() => handlePress('auto')}>
              <View style={[styles.abutton, selectedButton === 'auto' ? styles.selectedButtonAuto : styles.unselectedButton]}>
                <Text>Auto</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('cab')}>
              <View style={[styles.cbutton, selectedButton === 'cab' ? styles.selectedButtonCab : styles.unselectedButton]}>
                <Text>Cab</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.question}>
            <Text>Where would you like to go?</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 0,
  },
  icon: {
    width: 34,
    height: 34,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preferences: {
    height: 60,
    width: 200,
    borderRadius: 10,
    position: 'absolute',
    bottom: 300,
    left: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008955',
  },
  ptext: {
    color: 'white',
    fontSize: 20,
  },
  pbox: {
    height: 160,
    width: 350,
    borderRadius: 10,
    position: 'absolute',
    bottom: 120,
    left: 20,
    display: 'flex',
    alignItems: 'center',
    borderColor: '#008955',
    borderWidth: 1,
    justifyContent:'space-evenly',
    backgroundColor: '#B9E5D1',
  },
  acbutton: {
    display: 'flex',
    flexDirection: 'row',
  },
  abutton: {
    width: 150,
    height: 50,
    color: 'white',
    backgroundColor: '#E2F5ED',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cbutton: {
    width: 150,
    height: 50,
    color: 'white',
    backgroundColor: '#008955',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButtonAuto: {
    backgroundColor: '#008955', 
  },
  selectedButtonCab: {
    backgroundColor: '#008955', 
  },
  unselectedButton: {
    backgroundColor: '#E2F5ED', 
  },
  question:{
    height: 50,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#E2F5ED',
    borderBlockColor: '#008955',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeScreen;
