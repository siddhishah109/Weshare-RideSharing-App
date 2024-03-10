import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback, Dimensions } from 'react-native';
import TopAppBar from '../components/TopAppBar';

const HomeScreen = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState('auto');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [textInputValue1, setTextInputValue1] = useState('');
  const [textInputValue2, setTextInputValue2] = useState('');

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleBackdropPress = (event) => {
    const { locationY } = event.nativeEvent;
    const drawerContentHeight = 400; 
    const boundary = Dimensions.get('window').height - drawerContentHeight;
    if (locationY > boundary) {
      closeDrawer();
    }
  };
  
  const handlePress = (button) => {
    setSelectedButton(button);
  };
  const handleInputChange1 = (text) => {
    setTextInputValue1(text);
  };

  const handleInputChange2 = (text) => {
    setTextInputValue2(text);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TopAppBar/>

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
          <TouchableOpacity onPress={openDrawer}>
            <View style={styles.question}>
              <Text>Where would you like to go?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <Modal
         animationType="none"
        transparent={true}
        visible={isDrawerOpen}
        onRequestClose={closeDrawer}
      >
        <TouchableWithoutFeedback onPress={(event) => handleBackdropPress(event)}>
          <View style={styles.modalContainer}>
            <View style={styles.drawer}>
              <TouchableOpacity onPress={closeDrawer}>
                <Text>Close</Text>
              </TouchableOpacity>
              <View style={styles.texts}>
                <Text style={styles.textsa} >Select Address</Text>
              </View>
              <View style={styles.blc}>
              <TextInput
                style={styles.input}
                value={textInputValue1}
                onChangeText={handleInputChange1}
                placeholder="From"
              />
              <TextInput
                style={styles.input}
                value={textInputValue2}
                onChangeText={handleInputChange2}
                placeholder="To"
              />
              <TouchableOpacity onPress={closeDrawer}>
              <View style={styles.q}>
              <Text>Done</Text>
            </View>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: 400,
  },
  texts:{
    height: 30,
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textsa:{
    fontSize: 20,
    fontFamily: 'sans-serif',
  },
  input:{
    height: 50,
    width: 340,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  q:{
    height: 50,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#008955',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blc:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeScreen;
