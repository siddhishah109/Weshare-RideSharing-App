import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView
                
                style={styles.map}
                provider={MapView.PROVIDER_GOOGLE} 
                region={{
                    latitude: 19.1074, 
                    longitude: 72.8372, 
                    latitudeDelta: 0.06,
                    longitudeDelta: 0.06,
                }}
                showsUserLocation={true} 
            >
                <Marker
                    coordinate={{ latitude: 19.1074, longitude: 72.8372 }}
                    title="You are here"
                    
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
        height: '100vh',
        zIndex: 0,
    },
});

export default MapScreen;