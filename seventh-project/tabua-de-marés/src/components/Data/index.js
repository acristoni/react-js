import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import useMare from '../../hooks/mare-hooks';

export default function Data ({portoEscolhido}) {
    const { getMareData } = useMare();

    const [value, onChange] = useState(new Date());
    const [date,setDate] = useState("start=2019-03-15&end=2019-03-15")
    
    useEffect (() => {
        const data = moment(value).format('L')
        const mes = data[0] + data[1]
        const dia = data[3] + data[4]
        const ano = data[6] + data[7] + data[8] + data[9]

        setDate(`start=${ano}-${mes}-${dia}&end=${ano}-${mes}-${dia}`)
    },[value])

    useEffect (()=> {
        if((portoEscolhido.lat !== 1) && (portoEscolhido.lng !== 1)) {
            getMareData(portoEscolhido.lat,portoEscolhido.lng,date)
        }
    },[date])
    
    return (
        <div>
            <Calendar onChange={onChange} value={value}/>
        </div>
    )
}