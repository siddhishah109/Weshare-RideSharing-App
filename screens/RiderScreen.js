import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MapScreenRider from './MapScreenRider'

const RiderScreen = () => {
  return (
    <View style={styles.container}>
        <MapScreenRider />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100vw',
    height: '100vh',
  },

});
export default RiderScreen
