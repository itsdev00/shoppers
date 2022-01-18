import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData } from '../../utility/Utility';
import {Picker} from '@react-native-picker/picker';
import AuthenticationButton from '../../components/AuthenticationButton';
import InputText from '../../components/InputText';

const ForgotPasswordScreen = ({navigation}) => {
  
  const [email, setEmail] = useState('');
  const [ans, setAns] = useState('');
  const [pickerValue,setPickerValue]=useState('');
  getUserData = async() =>{
    try {
      let user = await getData(email)
       console.log(JSON.stringify(user))
       if(user.email== email && user.ans == ans && user.pickerValue==pickerValue){
        console.log('forgot password success');
        console.warn('Your pasword is: '+user.password);
        
       }
    } catch (error) {
      
    }
  }


  useEffect(() => {
     
     
  }, []);

  const fetchData=async(key)=>{
    data=await getData(key);
    //console.log(data.email);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setMobileNumber(data.mobileNumber)
    setEmail(data.email)
    setPassword(data.password)
  }


return(

  <View style={styles.page}>
    <View style={styles.head}>
      <Text style={styles.heading}>Forgot Password ? </Text>
    </View>
 
 <View style={styles.upper}>

  
  
  <InputText
  Placeholder={'Email'} 
  onChangeText={value=>setEmail(value)}
  />

  <Picker style={styles.picker}
  selectedValue={pickerValue}
  onValueChange={value=>setPickerValue(value)}>
      <Picker.Item label="Select Security Question" value="choose"/>
      <Picker.Item label="What is your nickname" value="q1"/>
      <Picker.Item label="What is your birth place" value="q2"/>
      <Picker.Item label="Are you single or married ?" value="q3"/>
      <Picker.Item label="What is your favourite food" value="q4"/>
      <Picker.Item label="What is your mother name" value="q5"/>
  </Picker>

  <InputText 
  Placeholder={'Answer Security Question'}
  onChangeText={value=>setAns(value)}
  />
  </View>
<View style={styles.bottom}>
  <AuthenticationButton 
  container={styles.btn}
  buttonName={'Get Password'}
  Onpress={()=>getUserData()} />
  <AuthenticationButton 
  container={styles.btn}
  buttonName={'Back to Login '}
  Onpress={()=>navigation.navigate('Login')} />

</View>
</View>


);
}
export default ForgotPasswordScreen;

const styles= StyleSheet.create({
  page:{
    flex:10,
    backgroundColor:'#dae685',
  },
  upper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom:'15.6%' ,
    
  },
  head:{
    justifyContent:'center',
    alignItems: 'center',
    },
    heading:{
      fontSize:20,
      fontWeight:'bold',
      lineHeight:30,
      marginTop:"30%",
      marginBottom:3,
    },
    btn:{
      marginTop:20
    },
  picker:{
      width:280,
      height:40,
      color:'black',
      borderWidth:2,
      backgroundColor:'#ADD8E6',
      alignItems:'center',
      marginBottom:15,
      borderRadius:20,
  }  ,
  bottom:{
    alignItems: 'center',
    marginBottom:80
  }
})
