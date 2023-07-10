import { FormControl } from '@mui/material'
import { LocalizationProvider, DatePicker, DateTimePicker, } from '@mui/x-date-pickers'
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import { DigitalClock } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
import { addErrorIntoField } from "../utils"
import ErrorsMessage from "./ErrorsMessage"



const fivePM = dayjs().set('hour', 17).startOf('hour');
const ninePM = dayjs().set('hour', 21).startOf('hour');
const disableTime = (value, view) => {
    const hour = value.hour()
    if (view === 'hour') {
        return hour < fivePM || hour > ninePM
    }
    return false
}

const TimeReservation = ({label, control, name, errors}) => {
  return (
    <FormControl sx={{mb:'1rem'}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>

    <Controller
    name={name}
    control={control}
    render={({field}) => {
        return (
            <DigitalClock className='clock'
            {...field}
            {...addErrorIntoField(errors[name])} required label={label}
            skipDisabled
            timeStep={15}
            minTime={fivePM}
            maxTime={ninePM}
            value={field.value}
            onChange={(hour) => {
                field.onChange(hour)
            }}  
        /> 
        )

    }}
>
   
</Controller>
{errors[name] ? <ErrorsMessage message={errors[name].message}/>: null}
</LocalizationProvider>
</FormControl>
  )
}

export default TimeReservation
