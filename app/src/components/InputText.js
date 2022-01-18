import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
const InputText = props => {
  return (
    <TextInput
      style={[styles.textField, props.container]}
      placeholder={props.Placeholder}
      keyboardType={props.typing}
      secureTextEntry={props.secure}
      placeholderTextColor="#003f5c"
      onChangeText={props.onChangeText}></TextInput>
  );
};
export default InputText;

const styles = StyleSheet.create({
  textField: {
    backgroundColor: '#ADD8E6',
    color:'black',
    //borderColor:'#00008b',
    //borderWidth:2,
    borderRadius: 8,
    width: '80%',
    height: 45,
    marginBottom: 15,
    marginTop:1,
    alignItems: 'center',
  },
});

