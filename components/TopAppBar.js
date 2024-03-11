import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';


const TopAppBar = ({ navigation }) => {
  const handelBell = () => {
    navigation.navigate('NotificationScreen');
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../asset/icons/Menui.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handelBell}>
        <Image source={require('../asset/icons/Notificationi.png')} style={styles.icon2} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    height: 50,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'transparent !important',
  },
  icon: {
    width: 34,
    height: 34,
  },
  icon2: {
    left: 0,
  },
});

export default TopAppBar;
