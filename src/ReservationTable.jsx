import React, {useRef} from 'react';
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { DigitalClock } from '@mui/x-date-pickers';
import { TextField, Box, Button, Stack, Container } from '@mui/material';
import { Label } from '@mui/icons-material';

import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";
import emailjs from '@emailjs/browser'
import dayjs from 'dayjs';

import TextFields from './Components/TextFields';
import SelectFields from './Components/SelectFields';
import CheckboxFields from './Components/CheckboxFields';
import DateReservationFields from './Components/DateReservationFields';
import TimeReservation from './Components/TimeReservation';

// schema reservation 

const schema = yup.object({
    fullName: yup.string().required('Nom pour la réservation svp'),
    email: yup.string().required('Courriel valide requis').email(),
    dateReservation: yup.date().required('choisir la journée'),
    timeReservation: yup.date().required("choisir l'heure"),
    confirmation: yup.bool().oneOf([true], 'Cocher la case pour réserver'),
}).required()

let renderCount = 0

const ReservationTable = () => {


    const { register, control, handleSubmit, formState: {errors, isDirty, isValid} } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {console.log(data)}

    const sendEmail = (data, e) => {
    emailjs.sendForm('service_ztk7u2l', 'template_m3m6r9f', e.target, 'iYyHEOqi_607S8zeg')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};

    renderCount++
  return (
        <Container>
            <span> ({renderCount/2})</span>
                <form onSubmit={handleSubmit( sendEmail)} noValidate>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                            <TextFields errors={errors} control={control} name='fullName' label='Nom réservation' />
                            <TextFields errors={errors} control={control} name='email' label="Courriel" />
                            <SelectFields errors={errors} control={control} name='selection' label='section' />
                            <DateReservationFields errors={errors} control={control} name='dateReservation' label='date' />
                            <TimeReservation errors={errors} control={control} name='timeReservation' label='heure' />
                            <CheckboxFields errors={errors} control={control} name='confirmation'/>
                    <Button
                    sx={{mt:3}}
                    type='submit'
                    variant="contained"
                    >
                        Réserver
                    </Button>
                    </Box>
                </form>
                <DevTool control={control} />
        </Container>
        )
}

export default ReservationTable
