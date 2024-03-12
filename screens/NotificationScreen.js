import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity,ScrollView, Button } from 'react-native';
const NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.head} >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Notification</Text>
        </View>
        
        <ScrollView style={styles.content}>
        <Text style={styles.day}>Today</Text>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Group formed</Text>
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae</Text>
          <Text style={styles.time}>15 min ago.</Text>
        </View>
         
        <View style={styles.textContainer1}>
          <Text style={styles.title}>Request accepted</Text>
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae</Text>
          <Text style={styles.time}>25 min ago.</Text>
        </View>


        <Text style={styles.day}>Yesterday </Text>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Group formed</Text>
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae</Text>
          <Text style={styles.time}>15 min ago.</Text>
        </View>
         
        <View style={styles.textContainer1}>
          <Text style={styles.title}>Request accepted</Text>
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae</Text>
          <Text style={styles.time}>25 min ago.</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Group formed</Text>
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae</Text>
          <Text style={styles.time}>15 min ago.</Text>
        </View>

      </ScrollView>

</View>  )
}
const styles = StyleSheet.create({
  container: {

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
  day:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 20,
  
    padding: 20,
    backgroundColor:'#E2F5ED',
    marginBottom: 10,
  },
  textContainer1: {
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  time: {
   marginTop: 5,
    color: 'grey',
  },
  content:{
    marginBottom: 30,
  }

  
});
export default NotificationScreen
