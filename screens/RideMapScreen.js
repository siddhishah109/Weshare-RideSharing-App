import React from 'react';
import { StyleSheet, View,TouchableOpacity,Text ,ActivityIndicator ,Alert} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const RideMapScreen = ({ route ,navigation}) => {
  const { fromlatitude, fromlongitude, tolatitude, tolongitude } = route.params;

  const calculateIntermediatePoints = () => {
    const numberOfSegments = 20; 
    const intermediatePoints = [];

    for (let i = 0; i <= numberOfSegments; i++) {
      const fraction = i / numberOfSegments;
      const intermediateLatitude = fromlatitude + (tolatitude - fromlatitude) * fraction;
      const intermediateLongitude = fromlongitude + (tolongitude - fromlongitude) * fraction;
      intermediatePoints.push({ latitude: intermediateLatitude, longitude: intermediateLongitude });
    }

    return intermediatePoints;
  };
  const findgroup = () => {
    navigation.navigate('GroupScreen', {
      fromlatitude: fromlatitude,
      fromlongitude: fromlongitude,
      tolatitude: tolatitude,
      tolongitude: tolongitude,
    });
  };
    const intermediatePoints = calculateIntermediatePoints();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
    <Text style={styles.backButtonText}>{'< Back'}</Text>
    </TouchableOpacity>
      <MapView style={styles.map} initialRegion={{
        latitude: fromlatitude,
        longitude: fromlongitude,
        latitudeDelta:  0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Polyline
          coordinates={[{ latitude: fromlatitude, longitude: fromlongitude }, ...intermediatePoints, { latitude: tolatitude, longitude: tolongitude }]}
          strokeWidth={4}
          lineDashPattern={[10, 10]}
        />
        <Marker
          coordinate={{ latitude: fromlatitude, longitude: fromlongitude }}
          title="From Location"
          description="Starting Point"
        />
        <Marker
          coordinate={{ latitude: tolatitude, longitude: tolongitude }}
          title="To Location"
          description="Destination"
        />
      </MapView>
      <TouchableOpacity onPress={findgroup}>
        <View style={styles.preferences} >
          <Text style={styles.ptext}>Find Groups</Text>
        </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  preferences: {
    height: 50,
    width: 280,
    borderRadius: 10,
    position: 'absolute',
    bottom: 50,
    left: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008955',
  }, 
  backButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  backButton:{
    position: 'absolute',
    display: 'flex',
    backgroundColor: '#008955',
    left:20,
    top: 20,
    padding:10,
    borderRadius: 10,
    zIndex:9999,
  },
  ptext: {
    color: 'white',
    fontSize: 18,
fontWeight: 'bold',
  },
});

export default RideMapScreen;

