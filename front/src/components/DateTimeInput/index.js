import React, { useState } from 'react';
import { Plataform } from 'react-native';

import DateTimeInputAndroid from './index.android';
import DateTimeInputIOS from './index.ios';

export default function Index() {
    return (
        Plataform.OS == 'android'
        ?
        <DateTimeInputAndroid/>
        :
        <DateTimeInputIOS/>
    )
}
