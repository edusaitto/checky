import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from './styles';

import add from '../../assets/add.png';
import check from '../../assets/ok.png';

export default function Footer({ showAdd, showCheck, onPress }) {
    return (
        <View style={styles.container}>
            
            { showAdd &&
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image source={add} style={styles.image}/>
            </TouchableOpacity>
            }
            { showCheck &&
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image source={check} style={styles.image2}/>
            </TouchableOpacity>
            }
            
        </View>
    )
}