import { FormControl, TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import { addErrorIntoField } from "../utils"
import ErrorsMessage from "./ErrorsMessage"
import { LocalizationProvider, DatePicker, DateTimePicker, } from '@mui/x-date-pickers'
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';

const today = dayjs();
const tomorrow = dayjs().add(1, 'day');
const maxDateReservtion = dayjs().add(45, 'day');


const DateReservationFields = ({label, control, name, errors}) => {
  return (
    <FormControl  sx={{mb: '1rem'}}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <DatePicker
            {...field}
            {...addErrorIntoField(errors[name])} required label={label}
            variant=""
            minDate={tomorrow}
            maxDate={maxDateReservtion}    
            value={field.value}
            onChange={(date) => {
                field.onChange(date);
            }}
            /* autoOk */
            format='YYYY-MM-DD'
            />
        )
        }
        >
        </Controller>
        {errors[name] ? <ErrorsMessage message={errors[name].message}/>: null}
        </LocalizationProvider>
        </FormControl>

  )
}

export default DateReservationFields
