import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  TextInput,
  DatePickerAndroid,
  Text,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import styles from "./styles";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

import { format } from "date-fns";

export default function DateTimeInputAndroid({ type, save }) {

  const [datetime, setDateTime] = useState();
  const [horavisible, sethoravisible] = useState(false);
  const [hora, sethota] = useState();

  async function selectDataOrHour() {
    if (type == "date") {
      const { action, year, month, day } = await DatePickerAndroid.open({
        mode: "calendar",
      });

      if (action == DatePickerAndroid.dateSetAction)
        setDateTime(`${day} / ${month} / ${year}`);
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
          setDateTime(`${hour}:${minute}`);
          sethoravisible(false);
          save(format(new Date(2020, 12, 1, hour, minute, 0, 0), 'HH:mm:ss'))
        }}
        onCancel={() => sethoravisible(false)}
        value={hora}
      />
    </TouchableOpacity>
  );
}
