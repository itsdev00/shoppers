import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppIcon from '../../components/AppIcon';
import COLORS from '../../consts/colors';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000);
    }, [])
    return (
        <View style={styles.container}>
            <AppIcon />
        </View>
    );
}
export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor:COLORS.sky,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});