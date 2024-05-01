import { StyleSheet, View, Text, Button ,ActivityIndicator,ScrollView , TouchableOpacity  } from 'react-native';
import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavouriteScreen = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [favoriteGroups, setFavoriteGroups] = useState([]);

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
    const fetchFavoriteGroups = async () => {
      try {
        const response = await axios.post('https://weshare-backend-3.onrender.com/get-favorite-groups', {
          user: email
        });
        setFavoriteGroups(response.data.favorite_groups);
        console.log('Favorite Groups:', response.data.favorite_groups);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching favorite groups:', error);
        setLoading(false);
      }
    };
    if (email) {
      fetchFavoriteGroups();
    }
  }, [email]);


  const removeFromFavorites = async (member1, member2) => {
    setLoading(true);
    try {
      const response = await axios.post('https://weshare-backend-3.onrender.com/delete-favorite-group', {
        user: email,
        member1,
        member2
      });
      console.log(response.data.message);
      setFavoriteGroups(prevGroups =>
        prevGroups.filter(group => !(group.members.includes(member1) && group.members.includes(member2)))
      );
    } catch (error) {
      console.error('Error removing favorite group:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Favourite Groups</Text>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.box}>
      {loading ? (
        <View style={styles.containerloader}>
           <ActivityIndicator size="large" color="#008000" />
        </View>
      ) : (
        <View style={styles.favoriteGroupsContainer}>
          {favoriteGroups.map((group, index) => (
            <View key={index} style={styles.favoriteGroupItem}>
              <Text style={styles.groupName}>Group {index + 1}</Text>
              <View style={styles.membersContainer}>
                {group.members.map((member, i) => (
                  <Text key={i} style={styles.memberText}>{member}</Text>
                ))}
              </View>

                <TouchableOpacity style={styles.delete}  onPress={() => removeFromFavorites(group.members[0], group.members[1])}>
                  
              <Text style={styles.removet}>Remove</Text>
              <Icon name="trash" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 17,
    backgroundColor: '#B9E5D1',
  },
  containerloader:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B9E5D1'

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    flex: 1,
    width: '100%',
  },

  favoriteGroupsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  favoriteGroupItem: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: '#008955',
    borderRadius: 10,
    backgroundColor: '#E2F5ED',
    marginBottom: 10,
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  membersContainer: {
    marginLeft: 10,
    marginBottom: 10,
  },
  memberText: {
    fontSize: 16,
  },
  removeButton: {
    marginTop: 10,
    padding: 10
  },
  delete:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    borderRadius:10,
    marginBottom:10,
    backgroundColor:'#008955',
    elevation: 3

  },
  removet:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
    marginRight:10
  }
  
})

export default FavouriteScreen
