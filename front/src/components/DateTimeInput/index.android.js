import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Image,
  TextInput,
  DatePickerAndroid,
  Text,
  Alert
} from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";

import { format, isPast } from "date-fns";

import styles from "./styles";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

export default function DateTimeInputAndroid({ type, save, date, hour }) {

  const [datetime, setDateTime] = useState();
  const [horavisible, sethoravisible] = useState(false);
  const [hora, sethora] = useState();

  useEffect(() => {
    if(type == 'date' && date) {
      setDateTime(format(new Date(date), 'dd/MM/yyyy'));
      save(format(new Date(date), 'yyyy-MM-dd'));
    }

    if(type == 'hour' && hour) {
      setDateTime(format(new Date(hour), 'HH:mm'));
      save(format(new Date(hour), 'HH:mm:ss'));
    }

  }, []);

  async function selectDataOrHour() {
    if (type == "date") {
      const { action, year, month, day } = await DatePickerAndroid.open({
        mode: "calendar",
      });

      if (action == DatePickerAndroid.dateSetAction)

        if(isPast(new Date(year, month, day, 23, 59, 59 ,0))) {
          return Alert.alert('Data inválida');
        } else {
      {
        day < 10 && month < 10 &&
        setDateTime(`0${day} / 0${month+1} / ${year}`);
      }
      {
        day < 10 && month >= 10 &&
        setDateTime(`0${day} / ${month+1} / ${year}`);
      }
      {
        day >= 10 && month < 10 &&
        setDateTime(`${day} / 0${month+1} / ${year}`);
      }
      {
        day >= 10 && month >= 10 &&
        setDateTime(`${day} / ${month+1} / ${year}`);
      }

      save(format(new Date(year, month, day), "yyyy-MM-dd"));
    }
    } else {
      sethoravisible(true);
    }

  }

  return (
    <TouchableOpacity onPress={selectDataOrHour}>
      <TextInput
        style={styles.input}
        placeholder={type == "date" ? "Defina a data" : "Defina o horário"}
        editable={false}
        value={datetime}
      />
      <Image
        style={styles.iconTextInput}
        source={type == "date" ? iconCalendar : iconClock}
      />
      <DateTimePicker
        mode={"time"}
        isVisible={horavisible}
        is24Hour= {true}
        onConfirm={(data) => {
          sethoravisible(false);
          const hour = new Date(data).getHours();
          const minute = new Date(data).getMinutes();
          {
            hour < 10 && minute < 10 &&
            setDateTime(`0${hour}:0${minute}`);
          }
          {
            hour < 10 && minute >= 10 &&
            setDateTime(`0${hour}:${minute}`);
          }
          {
            hour >= 10 && minute < 10 &&
            setDateTime(`${hour}:0${minute}`);
          }
          {
            hour >= 10 && minute >= 10 &&
            setDateTime(`${hour}:${minute}`);
          }

          sethoravisible(false);
          save(format(new Date(2020, 12, 1, hour-3, minute, 0, 0), 'HH:mm:ss'))
        }}
        onCancel={() => sethoravisible(false)}
        value={hora}
      />
    </TouchableOpacity>
  );
}
