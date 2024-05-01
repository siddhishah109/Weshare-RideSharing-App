import React,{useState,useEffect} from 'react';
import { View, StyleSheet ,Image ,ActivityIndicator} from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import axios from 'axios';
const MapScreenRider = () => {
    const [loading, setLoading] = useState(true);
    const [locations, setLocations] = useState([]);
        useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://weshare-backend-3.onrender.com/ride-requests/locations');
                setLocations(response.data); // Assuming the API returns an array of location objects [{ latitude, longitude }, ...]
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching locations:', error);
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#008955" />
                </View>
            ) : (
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
                
                {locations.map((location, index) => (
            <CircleMarker key={index} coordinate={{ latitude: location.fromlatitude, longitude: location.fromlongitude }} radius={40} />
          ))}
            </MapView>
            )}
        </View>
    );
};

const CircleMarker = ({ coordinate, radius }) => {
    const circleCoordinates = [];
    const earthRadius = 6378.1; 

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

