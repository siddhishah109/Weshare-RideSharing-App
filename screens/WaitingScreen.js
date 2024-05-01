import React ,{useState  ,useEffect}from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator  } from 'react-native';
import axios from 'axios';
import io from 'socket.io-client';

const WaitingScreen = ({navigation ,route}) => {
    const { groupId } = route.params;
    const [loading, setLoading] = useState(true);
    const [overallStatus, setOverallStatus] = useState('');
    const fetchGroupHistory = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`https://weshare-backend-3.onrender.com/group-history?group_id=${groupId}`);
          setOverallStatus(response.data.overall_status);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching group history:', error, error.response.data);
        } finally {
          setLoading(false); 
        }
      };
      useEffect(() => {
        fetchGroupHistory(); 
      }, []);

      useEffect(() => {
        if (overallStatus === 'approved') {
          navigation.navigate('ThankyouScreen',{
            groupId: groupId
          });
        }
      }, [overallStatus, navigation]);

    // useEffect(() => {
    //     // Connect to the WebSocket server
    //     const socket = io('http://127.0.0.1:5000');
    //     socket.on('connect', () => {
    //       console.log('Connected to WebSocket server');
    //     });
    //     socket.on('disconnect', () => {
    //       console.log('Disconnected from WebSocket server');
    //     });
        
    //     // Listen for 'group_history_updated' event from the server
    //     socket.on('group_history_updated', (data) => {
    //       console.log('Group history updated:', data);
    //       setOverallStatus(data.overall_status);
    //     });
    
    //     // Fetch initial group history
    //     const fetchGroupHistory = async () => {
    //       try {
    //         const response = await axios.get(`http://127.0.0.1:5000/group-history?group_id=${groupId}`);
    //         if (response.data && response.data.overall_status) {
    //             setOverallStatus(response.data.overall_status);
    //           } else {
    //             throw new Error('Invalid response data');
    //           }
    //       } catch (error) {
    //         console.error('Error fetching group history:', error, error.response.data);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    
    //     fetchGroupHistory();
    
    //     return () => {
    //       // Disconnect from the WebSocket server when component unmounts
    //       socket.disconnect();
    //     };
    //   }, [groupId]);
    
    //   useEffect(() => {
    //     if (overallStatus === 'approved') {
    //       navigation.navigate('ThankyouScreen');
    //     }
    //   }, [overallStatus, navigation]);
    
    // useEffect(() => {
    //     // Connect to the WebSocket server
    //     const socket = io('https://weshare-backend-3.onrender.com');
    
    //     // Listen for 'group_history_updated' event from the server
    //     socket.on('group_history_updated', (data) => {
    //       console.log('Group history updated:', data);
    //       setOverallStatus(data.overall_status);
    //     });
    
    //     // Fetch initial group history
    //     const fetchGroupHistory = async () => {
    //       try {
    //         const response = await axios.get(`https://weshare-backend-3.onrender.com/group-history?group_id=${groupId}`);
    //         setOverallStatus(response.data.overall_status);
    //         console.log(response.data);
    //       } catch (error) {
    //         console.error('Error fetching group history:', error, error.response.data);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    
    //     fetchGroupHistory();
    
    //     return () => {
    //       // Disconnect from the WebSocket server when component unmounts
    //       socket.disconnect();
    //     };
    //   }, [groupId]);
    
    //   useEffect(() => {
    //     if (overallStatus === 'approved') {
    //       navigation.navigate('ThankyouScreen');
    //     }
    //   }, [overallStatus, navigation]);
    const handleRefresh = () => {
        fetchGroupHistory(); 
      };
      if (loading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#008000" />
          </View>
        );
      }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Waiting for other members for group approval...</Text>
      <TouchableOpacity style={styles.button} onPress={handleRefresh}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#008000',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
export default WaitingScreen