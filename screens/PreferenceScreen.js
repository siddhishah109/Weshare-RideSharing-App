import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import {Picker} from '@react-native-picker/picker';
const branches = ['CS', 'IT', 'DS', 'AI/ML', 'EXTC'];
const roles =['Student' , 'Faculty', 'Admin'];
const years=['FE','SE','TE','BE','any'];
const genders=['Male','Female','Others'];
const PreferenceScreen = ({navigation}) => {
    
    const [selectedBranch, setSelectedBranch] = useState(branches[0]);
    const [selectedRole, setSelectedRole] = useState(roles[0]);
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const [selectedGender, setSelectedGender] = useState(genders[0]);

    const handleDone = () => {
        console.log('Selected Branch:', selectedBranch);
        console.log('Selected Role:', selectedRole);
        console.log('Selected Year:', selectedYear);
        console.log('Selected Gender:', selectedGender);
       
        navigation.navigate('HomeTabs');
    };
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
    <Text style={styles.backButtonText}>{'< Back'}</Text>
    </TouchableOpacity>
    <Text style={styles.heading}> Select Preference</Text>
     <Text>Branch</Text>
    <Picker
                selectedValue={selectedBranch}
                onValueChange={(itemValue, itemIndex) => setSelectedBranch(itemValue)}
            >
                {branches.map(branch => (
                    <Picker.Item key={branch} label={branch} value={branch} />
                ))}
            </Picker>
     <View>
     <Text>Role</Text>
    <Picker
                selectedValue={selectedRole}
                onValueChange={(itemValue, itemIndex) => setSelectedRole(itemValue)}
            >
                {roles.map(branch => (
                    <Picker.Item key={branch} label={branch} value={branch} />
                ))}
            </Picker>
     </View>
     <View>
     <Text>Year</Text>
    <Picker
                selectedValue={selectedYear}
                onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
            >
                {years.map(branch => (
                    <Picker.Item key={branch} label={branch} value={branch} />
                ))}
            </Picker>
     </View>
     <View>
     <Text>Gender</Text>
    <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
            >
                {genders.map(branch => (
                    <Picker.Item key={branch} label={branch} value={branch} />
                ))}
            </Picker>
     </View>
     <TouchableOpacity  onPress={handleDone}>
              <View style={styles.q}>
              <Text style={styles.ptext}>Done</Text>
            </View>
              </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: 'white',
    },
    backButton: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    backButtonText: {
      fontSize: 16,
      color: 'black',
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      alignSelf: 'center',
      marginLeft: 10,
      marginTop: 30, 
    },
    ptext: {
        color: 'white',
        fontSize: 18,
    fontWeight: 'bold',
      },
      q:{
        height: 50,
        width: 230,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#008955',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
   
   
  });
  
  
  
export default PreferenceScreen

