import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#558DD5',
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
        alignItems: 'center',
        paddingTop: 25,
    },
    logo: {
        width: 80,
        height: 30,
    },
    notification: {
        position: 'absolute',
        right: 40,
        top: 30,
    },
    bell: {
        width: 20,
        height: 25,
    },
    circle: {
       backgroundColor : '#FFF',
       borderRadius: 20, 
       alignItems: 'center',
       position: 'absolute',
       left: 13,
       bottom: 13,
       width: 20,
    },
    qrarea: {
        position: 'absolute',
        left: 35,
        top: 30,
    },
    qr: {
        width: 25,
        height: 25,
    },
    arrow: {
        position: 'absolute',
        left: 20,
        top: 33,
    },
    back: {
        width: 20,
        height: 20,
    }
});

export default styles;