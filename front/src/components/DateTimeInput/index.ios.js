import React, {useState} from 'react';
import {
    TouchableOpacity,
    Image,
    DatePickerIOS,
} from 'react-native';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

import styles from './styles';

export default function DateTimeInputIOS ({ type }) {
    const [datetime, setDateTime] = useState(new Date);

    return(
        <TouchableOpacity style={styles.input}>
            <DatePickerIOS
                date={datetime}
                mode={type}
                minimumDate={new Date}
                onDateChange={setDateTime}
            />
            <Image style={styles.iconTextInput}
            source={type == 'date' ? iconCalendar : iconClock}
            />
        </TouchableOpacity>
    )
}