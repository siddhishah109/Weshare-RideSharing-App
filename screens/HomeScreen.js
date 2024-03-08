import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomeScreen = ({ onLogout }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Home Screen!</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
