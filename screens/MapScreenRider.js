import React from 'react';
import { View, StyleSheet ,Image} from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';

const MapScreenRider = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={MapView.PROVIDER_GOOGLE}
                region={{
                    latitude: 19.1074,
                    longitude: 72.8362,
                    latitudeDelta: 0.06,
                    longitudeDelta: 0.06,
                }}
                showsUserLocation={true}
            >
                <CircleMarker
                    coordinate={{ latitude: 19.1094, longitude: 72.8342 }}
                    radius={70}
                />
                 <CircleMarker
                    coordinate={{ latitude: 19.1024, longitude: 72.8312 }}
                    radius={50}
                />
                  <CircleMarker
                    coordinate={{ latitude: 19.1075, longitude: 72.8302 }}
                    radius={20}
                />
            </MapView>
        </View>
    );
};

const CircleMarker = ({ coordinate, radius }) => {
    const circleCoordinates = [];
    const earthRadius = 6378.1; // Radius of the Earth in kilometers

    // Generate circle coordinates
    for (let i = 0; i <= 360; i += 10) {
        const angle = (i * Math.PI) / 180;
        const latitude = Math.min(Math.max(coordinate.latitude + (radius / earthRadius) * (Math.sin(angle)), -90), 90);
        const longitude = coordinate.longitude + (radius / earthRadius) * (Math.cos(angle)) / Math.cos(latitude * (Math.PI / 180));
        circleCoordinates.push({ latitude, longitude });
    }

    return (
        <>
            {/* Circle */}
            <Polygon
                coordinates={circleCoordinates}
                fillColor="rgba(255,0,0,0.2)"
                strokeWidth={0}
            />

            {/* Marker */}
            <Marker coordinate={coordinate}>
                <Image
                    source={require('../asset/icons/Marker.png')} // Add your circular marker image source here
                    style={{ width: 50, height: 50 }} // Adjust width and height as needed
                />
            </Marker>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
        zIndex: 0,
    },
});

export default MapScreenRider;
