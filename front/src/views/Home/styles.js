import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#161616',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center',
    },
    filterActived:{
        color:'#558DD5',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textInative:{
        color:'#fff',
        opacity: 0.3,
        fontSize: 16,
    },
    content: {
        width: '100%',
    },
    space: {
        width: '100%',
        height: 80,
    },
    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#558DD5',
        alignItems: 'center',
        marginBottom: 25,
        marginTop: -20
    },
    titleText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        position: 'relative',
        top: 15,
        backgroundColor: '#161616',
        paddingHorizontal: 10,
    }
});

export default styles;