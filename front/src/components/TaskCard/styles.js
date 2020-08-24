import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,
        width: '90%',
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
    },
    cardLeft:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    typeActive: {
        width: 60,
        height: 60,
    },
    cardTitle: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },
    cardDone: {
        opacity: 0.5,
    },
})

export default styles;