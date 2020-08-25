import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#161616',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal:5,
    },
    imageIcon: {
        width: 45,
        height: 45,
        marginTop: 10,
        marginHorizontal: 8,
    },
    label: {
        color: '#fff',
        fontSize: 18,
        paddingHorizontal: 15,
        marginTop: 20,
        marginBottom: 5,
    },
    input: {
        fontSize: 16,
        padding: 10,
        marginHorizontal: 15,
        width: '93%',
        borderBottomColor: '#558DD5',
        borderBottomWidth: 1,  
        color: '#fff', 
    },
    inputarea: {
        fontSize: 16,
        padding: 10,
        marginHorizontal: 15,
        width: '93%',
        borderColor: '#558DD5',
        borderWidth: 1,
        borderRadius: 10,
        height: 100,
        textAlignVertical: 'top',
        color: '#fff', 
    },
    inLine: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight:15,
    },
    inputInLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        marginLeft: 15,
    },
    switchLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#558DD5',
    },
    removeLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#b22222',
    },
    typeIconInative: {
        opacity: 0.5
    }
});

export default styles;