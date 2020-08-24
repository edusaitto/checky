import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image
    } from 'react-native'; 
    
import styles from './styles';

//ASSETS
import logo from '../../assets/logo2.png';
import bell from '../../assets/bell.png';
import qr from '../../assets/qr.png';
import back from '../../assets/back.png';

export default function Header ({ showBell, showBack, late, pressBell, navigation }) {
    
    function Back() {
        navigation.navigate('Home');
    } 
    
    return (
        <View style={styles.header}>
            <Image source={logo} style={styles.logo}/>
            
            {
            showBell && late > 0 &&
            <TouchableOpacity style={styles.notification} onPress={pressBell}>
                <Image source={bell} style={styles.bell}/>
                <View style={styles.circle}>
                    <Text style={styles.notificationText}>{late}</Text>
                </View>
            </TouchableOpacity>
            }
            
            {
            showBack ?
            <TouchableOpacity style={styles.arrow} onPress={Back}>
                <Image source={back} style={styles.back}/>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.qrarea}>
                <Image source={qr} style={styles.qr}/>
            </TouchableOpacity>
            }
            
        </View>
    )
}