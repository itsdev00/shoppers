import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
function AuthenticationButton(props) {
  return (
    <TouchableOpacity
      style={[styles.btn, props.container]}
      onPress={props.Onpress}>
      <Text style={styles.btnText}>{props.buttonName}</Text>
    </TouchableOpacity>
  );
}
export default AuthenticationButton;

const styles = StyleSheet.create({
  btn: {
    width: '80%',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#eccfcf',
    borderColor: '#8b0000',
    borderWidth: 1.5,
  },
  btnText: {
    color: '#8b0000',
    fontWeight: 'bold',
    fontSize: 16
  },
});

