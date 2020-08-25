import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Switch,
    Alert,
    Button
} from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import DateTimeInput from '../../components/DateTimeInput';

import typeIcons from '../../utils/typeIcons';

import styles from './styles';

import api from '../../services/api';

export default function Task({ navigation }) {

    const [done, setDone] = useState(false);
    const [type, setType] = useState();
    const [title, setTitle] = useState();
    const [description, setDesc] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

    async function New() {

    if(!title)
        return Alert.alert('Defina o nome da tarefa!')

    if(!description)
        return Alert.alert('Defina a descrição da tarefa!')

    if(!type)
        return Alert.alert('Defina o tipo da tarefa!')
        
    if(!date)
        return Alert.alert('Defina a data da tarefa!')    

    await api.post('/task', {
        macaddress, 
        type,
        title,
        description,
        when: `${date}T${hour}.000`
    }).then(() => {
        navigation.navigate('Home');
    })

    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header showBack={true} navigation={navigation}/>
            <ScrollView style={{width: '100%'}}>

                <View 
                    style={styles.iconView}
                    //horizontal={true} 
                    //showsHorizontalScrollIndicator={false} - para implementação do scroll nos ícones
                >
                    {
                        typeIcons.map((icon, index) => (
                            icon != null &&
                            <TouchableOpacity onPress={() => setType(index)}>
                                <Image source={icon} style={[styles.imageIcon, type && type != index && styles.typeIconInative]}/>
                            </TouchableOpacity>
                        ))
                    }   
                </View>

                <Text style={styles.label}>TÍTULO</Text>
                <TextInput 
                    style={styles.input}
                    maxLength={30}
                    placeholder="Qual a tarefa?"
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                />

                <Text style={styles.label}>DETALHES</Text>
                <TextInput 
                    style={styles.inputarea}
                    maxLength={200}
                    multiline={true}
                    placeholder="Descreva melhor para não esquecer de nada!"
                    onChangeText={(text) => setDesc(text)}
                    value={description}
                />
            
                <DateTimeInput type={'date'} save={setDate}/>
                <DateTimeInput type={'hour'} save={setHour}/>                

                <View style={styles.inLine}>
                    <View style={styles.inputInLine}>
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#00463A' : '#fff'} />
                        <Text style={styles.switchLabel}>CONCLUÍDO</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>EXCLUIR</Text>
                    </TouchableOpacity>
                </View>

                
            </ScrollView>

            <Footer showCheck={true} onPress={New}/>
            
        </KeyboardAvoidingView>
    )
}