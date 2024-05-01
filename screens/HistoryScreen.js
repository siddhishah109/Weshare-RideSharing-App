import { View, Text, FlatList, ActivityIndicator, StyleSheet ,TouchableOpacity  } from 'react-native';
import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HistoryScreen = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [userGroups, setUserGroups] = useState([]);
  useEffect(()=>{
    const getEmail = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString !== null) {
          const userData = JSON.parse(userDataString);
          setEmail(userData.username);
        } else {
          console.log('No user data found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error getting user data from AsyncStorage in preference screen:', error);
      }
    };
    getEmail();
  },[]);

  useEffect(() => {
    const fetchUserGroups = async () => {
      try {
        const response = await axios.post('https://weshare-backend-3.onrender.com/history', {
          email: email
        });
        setUserGroups(response.data.user_groups);
        // console.log(response.data);
      } catch (error) {
        // console.error('Error fetching user groups:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserGroups();
  }, [email]);

  // const handleToggleFavorite = async (group) => {
  //   try {
  //     const currentUserEmail = group.users.find(user => user.email === email);
  //     const member1 = group.users.find(user => user.email !== email && user.email !== currentUserEmail);
  //     const member2 = group.users.find(user => user.email !== email && user.email !== currentUserEmail && user.email !== member1.email);
  //     const response = await axios.post('https://weshare-backend-3.onrender.com/add-favorite-group', {
  //     user: email,
  //     member1: member1.email,
  //     member2: member2.email
  //     });
  //     setUserGroups(prevGroups => prevGroups.map(prevGroup => {
  //       if (prevGroup._id === group._id) {
  //         return { ...prevGroup, isFavorite: true };
  //       }
  //       return prevGroup;
  //     }));
  //   } catch (error) {
  //     console.error('Error adding favorite group:', error);
  //   }
  // };
  // const renderHeartIcon = (group) => {
  //   if (group.isFavorite) {
  //     return <TouchableOpacity onPress={() => handleToggleFavorite(group)}><Text style={styles.heartIconRed}>❤️</Text></TouchableOpacity>;
  //   }
  //   return <TouchableOpacity onPress={() => handleToggleFavorite(group)}><Text style={styles.heartIcon}>❤️</Text></TouchableOpacity>;
  // };


  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ride History</Text>
      {userGroups.length === 0 ? (
        <Text style={styles.noGroupsText}>No groups found</Text>
      ) : (
        <FlatList
          data={userGroups}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.groupContainer}>
               {/* {renderHeartIcon(item)} */}
              <Text style={styles.membersText}>Members:</Text>
              {item.users.map((user) => (
                <View key={user.email}>
                  <Text>{user.email}   {user.role}</Text>
                </View>
              ))}
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:  '#B9E5D1',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  noGroupsText: {
    fontSize: 18,
    color: 'red',
  },
  groupContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: 10,
    borderRadius: 20,
    width: 300,
    backgroundColor: '#f2f2f2',
    elevation: 5,

  },
  groupId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  membersText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heartIcon: {
    fontSize: 20,
  },
  heartIconRed: {
    fontSize: 20,
    color: 'red',
  },
});

export default HistoryScreen

