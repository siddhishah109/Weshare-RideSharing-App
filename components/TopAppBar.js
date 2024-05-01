import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const TopAppBar = ({ navigation }) => {
  const handelBell = () => {
    navigation.navigate('NotificationScreen');
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handelBell}>
      
<View style={styles.iconbody} ><Icon name="bell" size={22} color="#807979" style={styles.icon} /></View>
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

  icon2: {
    left: 0,
  },
  iconbody:{
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    display: 'flex',
    position: 'absolute',
    top: -14,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  }
});

export default TopAppBar;
