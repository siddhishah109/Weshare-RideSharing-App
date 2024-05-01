import React ,{useState , useEffect} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity,ScrollView, Button ,ActivityIndicator } from 'react-native';
import axios from 'axios';

const ThankyouScreen = ({navigation , route}) => {
   const { groupId } = route.params;
   const [loading, setLoading] = useState(false);

   const handleDone = async () => {
    setLoading(true);
    try {
      const response = await axios.delete('https://weshare-backend-3.onrender.com/delete-group', {
        params: {
          group_id: groupId
        }
      });
      console.log(response.data.message);
      navigation.navigate('HomeTabs');
    } catch (error) {
      console.error('Error deleting group:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.c}>
      <View style={styles.head} >
      <Text style={styles.heading}></Text>
        </View>
        <View style={styles.container}>
            <Image source={require('../asset/ty1.png')}  />
        <Text style={styles.ty}>Thankyou</Text>
        <Text style={styles.t}>Your group has formed successfully </Text>
        <TouchableOpacity style={styles.q}  onPress={handleDone}>
              <View >
              <Text style={styles.buttonText} >Done</Text>
            </View>
              </TouchableOpacity>
        </View>
        
    </View>
  )
}
const styles = StyleSheet.create({
    ty:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop: 20,
        color:'black',
    },
    t:{
        fontSize: 15,
        textAlign:'center',
        marginTop: 10,
    },
    c:{
display:'flex',
    },
    container: {
       display:'flex',
         justifyContent:'center',
            alignItems:'center',
            marginTop:200,
    },
    backButton: {
      margin: 10,
      marginLeft: 20,
    },
    backButtonText: {
      fontSize: 16,
      color: 'black',
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 60,
    
    },
    head:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      
    },
    q:{
    height: 50,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#008955',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
   
    });
  
  
export default ThankyouScreen
