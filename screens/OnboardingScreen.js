// OnboardingScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation  }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  const handleSkip = () => {
    navigation.navigate('LoginScreen');
  };

const getNextImage = () => {
    switch (currentPage) {
        case 1:
            return require('../asset/arrow1.png');
          case 2:
            return require('../asset/arrow2.png');
          case 3:
            return require('../asset/arrow3.png');
          default:
            return require('../asset/arrow3.png');
    }
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      {currentPage === 1 && (
        <View style={styles.content}>
          <Image source={require('../asset/asset1.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Anywhere you are</Text>
            <Text style={styles.subtitle}>Join our community-driven ride-share platform for efficient and cost-effective commuting.</Text>
          </View>
        </View>
      )}
      {currentPage === 2 && (
        <View style={styles.content}>
          <Image source={require('../asset/asset2.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>At anytime</Text>
            <Text style={styles.subtitle}>Connect with nearby riders, form groups based on your preferences, and share rides for a smarter, greener commute</Text>
          </View>
        </View>
      )}
      {currentPage === 3 && (
        <View style={styles.content}>
          <Image source={require('../asset/asset3.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Start Now!!</Text>
            <Text style={styles.subtitle}>Save money, reduce your carbon footprint, and build connections. Start sharing rides today for a more sustainable and connected community</Text>
          </View>
        </View>
      )}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
      {currentPage < 4 ? (
          <Image source={getNextImage()} style={styles.nextImage} />
        ) : (
          <Text style={styles.nextText}>Get Started</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  image: {
    width: 380,
    height: 235,
    marginBottom: 30,
    marginTop:150
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingLeft: 55,
    paddingRight: 55,
    color: 'grey',
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 30,
    color:"black",
    fontWeight:"bold"
  },
  skipText: {
    fontSize: 16,
    color: '#666',
  },
  nextButton: {
    position: 'absolute',
    bottom: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextImage: {
   
    width: 80,
    height: 80,
  },
  nextText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default OnboardingScreen;
