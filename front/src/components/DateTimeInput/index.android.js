import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  TextInput,
  DatePickerAndroid,
  Text,
} from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";
import { format } from "date-fns";

import styles from "./styles";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

export default function DateTimeInputAndroid({ type, save }) {

  const [datetime, setDateTime] = useState();
  const [horavisible, sethoravisible] = useState(false);
  const [hora, sethora] = useState();

  async function selectDataOrHour() {
    if (type == "date") {
      const { action, year, month, day } = await DatePickerAndroid.open({
        mode: "calendar",
      });

      if (action == DatePickerAndroid.dateSetAction)

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
