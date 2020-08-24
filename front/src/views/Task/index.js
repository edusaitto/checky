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
} from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import DateTimeInput from '../../components/DateTimeInput';

import typeIcons from '../../utils/typeIcons';

import styles from './styles';

export default function Task({ navigation }) {
    const [done, setDone] = useState(false);
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
                        typeIcons.map(icon => (
                            icon != null &&
                            <TouchableOpacity>
                                <Image source={icon} style={styles.imageIcon}/>
                            </TouchableOpacity>
                        ))
                    }   
                </View>

                <Text style={styles.label}>TÍTULO</Text>
                <TextInput style={styles.input} maxLength={30} placeholder="Qual a tarefa?"/>
                <Text style={styles.label}>DETALHES</Text>
                <TextInput 
                    style={styles.inputarea}
                    maxLength={200}
                    multiline={true}
                    placeholder="Descreva melhor para não esquecer de nada!"
                />
            
                <DateTimeInput type={'date'}/>
                <DateTimeInput type={'hour'}/>

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

            <Footer showAdd={false}/>
            
        </KeyboardAvoidingView>
    )
}