import { FormControl, TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import { addErrorIntoField } from "../utils"
import ErrorsMessage from "./ErrorsMessage"

const TextFields = ({label, control, name, errors}) => {
  return (
    <FormControl sx={{mb: '1rem'}}>
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                 <TextField 
                    {...field} 
                    {...addErrorIntoField(errors[name])} 
                    required 
                    label={label} 
                    variant='filled'
                    sx={{
                        width: { sm: 200, md: 300 }
                        
                    }}
                  />
            )}
        >
        </Controller>
        {errors[name] ? <ErrorsMessage message={errors[name].message}/>: null}
    </FormControl>
  )
}

export default TextFields
