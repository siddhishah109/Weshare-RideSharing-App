import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';


const TopAppBar = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../asset/icons/Menui.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../asset/icons/Notificationi.png')} style={styles.icon} />
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
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  icon: {
    width: 34,
    height: 34,
  },
});

export default TopAppBar;
