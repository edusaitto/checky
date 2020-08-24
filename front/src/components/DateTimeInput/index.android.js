import React, { useState } from 'react';
import {
    TouchableOpacity,
    Image,
    TextInput,
    DatePickerAndroid,
    TimePickerAndroid,
    Text,
} from 'react-native';

import styles from './styles';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function DateTimeInputAndroid({ type }) {
    
    const [datetime, setDateTime] = useState();

async function selectDataOrHour() {
    if(type == 'date') {
        const{action, year, month, day} = await DatePickerAndroid.open({
            mode: 'calendar'
        });

        if(action == DatePickerAndroid.dateSetAction)
        setDateTime(`${day} / ${month} / ${year}`);
    }  else {
        const{ action, hour, minute } = await TimePickerAndroid.open({
            is24Hour: true
        });

        if(action != TimePickerAndroid.dismissedAction)
        setDateTime(`${hour}:${minute}`);
    }
}

    return (
        <TouchableOpacity onPress={selectDataOrHour}>
            <TextInput 
                style={styles.input}
                placeholder={type == 'date' ? 'Defina a data' : 'Defina o horário'}
                editable={false}
                value={datetime}
            />
            <Image style={styles.iconTextInput}
            source={type == 'date' ? iconCalendar : iconClock}
            />
        </TouchableOpacity>
    )
}