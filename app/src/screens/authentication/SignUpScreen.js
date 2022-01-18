import {View, StyleSheet, Alert,ScrollView, KeyboardAvoidingView, TextInput} from 'react-native';
import InputText from '../../components/InputText';
import AppIcon from '../../components/AppIcon';
import React, {useState} from 'react';
import AuthenticationButton from '../../components/AuthenticationButton';
import {Picker} from '@react-native-picker/picker';

import {setData} from '../../utility/Utility';

const SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pickerValue,setPickerValue]=useState('');
  const [ans, setAns] = useState('');

   const setUserData = async() => {
    let obj = {
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      email: email,
      password: password,
      pickerValue:pickerValue,
      ans:ans,
    };
    let res=await setData(email,obj);
    //console.warn('sign up log '+res);
    if(res==200){
      navigation.navigate('HomePage');
    }
    else{
      Alert.alert('User Already Exist');
    }
    
  };
  
 
  return (
<ScrollView>
<KeyboardAvoidingView>
    <View style={styles.container}>
    <View style={styles.head}>
      <AppIcon />
      <InputText
        Placeholder={'First Name'}
        onChangeText={value => setFirstName(value)}
      />

      <InputText
        Placeholder={'Last Name'}
        onChangeText={value => setLastName(value)}
      />

      <InputText
        typing='numeric'
        Placeholder={'Mobile Number'}
        onChangeText={value => setMobileNumber(value) }
      />

      <InputText
        Placeholder={'Email'}
        onChangeText={value => setEmail(value)}
      />

      <InputText
        Placeholder={'Password'}
        onChangeText={value => setPassword(value)}
        secure
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

      <AuthenticationButton
        buttonName={'SIGNUP'}
        container={styles.btn}
        Onpress={()=>setUserData()}
      />
      
    </View>
  </View>
</KeyboardAvoidingView>
</ScrollView>
  );
};
export default SignUpScreen;
const styles = StyleSheet.create({
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  btn:{
    marginTop:'2%'
  },
  container:{
    flex:1,
    backgroundColor:'#3b444b'
  },
  picker:{
    width:280,
    height:40,
    color:'black',
    borderWidth:2,
    backgroundColor:'#ADD8E6',
    alignItems:'center',
    marginBottom:15,
    borderRadius:20
}  ,
});
