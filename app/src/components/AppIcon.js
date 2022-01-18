import React from "react";
import { Image, StyleSheet } from "react-native";

const AppIcon=(props)=>{
    return(
        <Image style={[styles.iconImage,props.container]}
        source={require('../../res/assets/shop.jpeg')}/>
    );
}
export default AppIcon;

const styles=StyleSheet.create({
    iconImage: {
        marginBottom: 40,
        marginTop:2,
        height: 200,
        width: 200,
        borderRadius: 100
    },
});
