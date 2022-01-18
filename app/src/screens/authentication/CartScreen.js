import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import AuthenticationButton from '../../components/AuthenticationButton';

import COLORS from '../../consts/colors';


const CartScreen = ({navigation}) => {
    return (
        
        <View style ={styles.contain}>
            <View style={styles.container}>
             <Text style={styles.headerTitle}>Cart</Text>
             </View>
        <Text style={styles.cart}> Cart Data is rendering on console not on screen</Text>
        <Text style={styles.cart}> NEED SOME TIME , CLICK PLACE ORDER!</Text>
        <AuthenticationButton buttonName={'Place order'}
        container={styles.btn}
        Onpress={()=> navigation.navigate('PlaceOrderScreen')}/>
        </View>
        
       
       
    );
}

export default CartScreen;
const styles = StyleSheet.create({
    contain:{
        alignItems:'center',
        backgroundColor:COLORS.grey,
        flex:1
    },
    container:{
        alignItems:'center',
        marginTop:"5%",
        marginLeft:'1%',
        justifyContent:'center',
        backgroundColor:COLORS.grey,
    },
    btn: {
        marginTop:'135%',
            
    },
    headerTitle: {
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        width: '55%',
        lineHeight: 30,
        marginTop:'10%',
        marginLeft:'1%',
    },
    cart:{
        marginTop:"5%",

    }
    
})
