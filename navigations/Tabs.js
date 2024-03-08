import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Button,Image,TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen1 from '../screens/ProfileScreen1';
import FavouriteScreen from '../screens/FavouriteScreen';
import HistoryScreen from '../screens/HistoryScreen';
import WalletScreen from '../screens/WalletScreen';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children,onPress})=>{
  return(
    <TouchableOpacity
    style={{
      top:-30,
      justifyContent:'center',
      alignItems:'center',
      ...styles.shadow
    }}
    onPress={onPress}
    >
      <View style={{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#08B783'
      }}>
        {children}
      </View>
    </TouchableOpacity>
  )
}


const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
            position: 'absolute',
            // bottom: 25,
            elevation: 0,
            borderTopLeftRadius: 45,
            borderTopRightRadius: 45,
            height: 80,
          },
          null,
        ],
        
      })}
      

      >
     
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false,
        tabBarIcon:({focused})=>{
          return(
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image
              source={require('../asset/icons/housei.png')}
              resizeMode='contain'
              style={{
                width:35,
                height:35,
                tintColor:focused ? '#08B783' : 'gray'
              }}
              />
              <Text style={{color:focused ? '#08B783' : 'gray',fontSize:12}}>Home</Text>
            </View>
          )
        } }} />
        <Tab.Screen name="Favourite" component={FavouriteScreen} options={{ headerShown: false,
         tabBarIcon:({focused})=>{
          return(
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image
              source={require('../asset/icons/hearti.png')}
              resizeMode='contain'
              style={{
                width:35,
                height:35,
                tintColor:focused ? '#08B783' : 'gray'
              }}
              />
              <Text style={{color:focused ? '#08B783' : 'gray',fontSize:12}}>Favourite</Text>
            </View>
          )
        } }} />
        <Tab.Screen name="Wallet" component={WalletScreen} options={{ headerShown: false,
         tabBarIcon:({focused})=>(
       
           
              <Image
              source={require('../asset/icons/walleti.png')}
              resizeMode='contain'
              style={{
                width:55,
                height:55,
                tintColor:'white',
              }}
              />
  ),
          tabBarButton:(props)=>(
            <CustomTabBarButton {...props}/>
         )
        }} />
        <Tab.Screen name="History" component={HistoryScreen} options={{ headerShown: false,
         tabBarIcon:({focused})=>{
          return(
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image
              source={require('../asset/icons/Timei.png')}
              resizeMode='contain'
              style={{
                width:35,
                height:35,
                tintColor:focused ? '#08B783' : 'gray'
              }}
              />
              <Text style={{color:focused ? '#08B783' : 'gray',fontSize:12}}>History</Text>
            </View>
          )
        } }}  />
        <Tab.Screen  name="Profile" component={ProfileScreen1} options={{ headerShown: false,
         tabBarIcon:({focused})=>{
          return(
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image
              source={require('../asset/icons/useri.png')}
              resizeMode='contain'
              style={{
                width:35,
                height:35,
                tintColor:focused ? '#08B783' : 'gray'
              }}
              />
              <Text style={{color:focused ? '#08B783' : 'gray',fontSize:12}}>Profile</Text>
            </View>
          )
        } }} />
    </Tab.Navigator>
  )
};
const styles = StyleSheet.create({
  tabBarStyle: {
    display: 'flex',
    position: 'absolute',
    elevation: 0,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    height: 80,
  },
});
export default Tabs
