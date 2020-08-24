import React, {useState, useEffect} from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
    } from 'react-native';

import styles from './styles';

import api from '../../services/api';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

export default function Home({ navigation }) {

    const [filter, setFilter] = useState('today');

    const [tasks, setTasks] = useState([]);

    const [load, setLoad] = useState(false);

    const [lateCount, setLateCount] = useState();

    async function loadTasks() {
        await api.get(`/task/filter/${filter}/11:11:11:11:11:11`).then(response=>{
            setTasks(response.data)
        });
    }

    async function lateVerify() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`).then(response=>{
            setLateCount(response.data.length)
        });
    }

    function Notification() {
        setFilter('late');
    }

    function New() {
        navigation.navigate('Task')
    }

    useEffect(() =>{
        loadTasks();
        lateVerify();
    }, [filter])

    return (
        
        <View style={styles.container}>
            <Header showBell={true} pressBell={Notification} late={lateCount}/>
            <View style={styles.filter}>
                <TouchableOpacity onPress={()=>setFilter('all')}>
                    <Text style={filter == 'all' ? styles.filterActived : styles.textInative}>TODOS</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setFilter('today')}>
                    <Text style={filter == 'today' ? styles.filterActived : styles.textInative}>HOJE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setFilter('week')}>
                    <Text style={filter == 'week' ? styles.filterActived : styles.textInative}>SEMANA</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setFilter('month')}>
                    <Text style={filter == 'month' ? styles.filterActived : styles.textInative}>MÊS</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setFilter('year')}>
                    <Text style={filter == 'year' ? styles.filterActived : styles.textInative}>ANO</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>TAREFAS {filter == 'late' && ' ATRASADAS'}</Text>
            </View>
            
            <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                {
                    load ?
                    <ActivityIndicator color='#FFF' size={30}/>
                    : 
                    tasks.map(t =>
                    (
                        <TaskCard done={false} title={t.title} when={t.when} type={t.type}/>
                    ))
                }

                <View style={styles.space}></View>
                <Footer showAdd={true} onPress={New} />
            </ScrollView>
        </View>    
    )
}