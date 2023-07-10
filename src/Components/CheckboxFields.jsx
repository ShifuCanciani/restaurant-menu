import { Checkbox, FormControl, FormControlLabel } from "@mui/material"
import { Controller } from "react-hook-form"
import { addErrorIntoField } from "../utils"
import ErrorsMessage from "./ErrorsMessage"

const CheckboxFields = ({name, control, errors}) => {
  return (
    <FormControl> 
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <FormControlLabel required control={
            <Checkbox 
                {...field} />} 
                label="Je serai présent à ma réservation"
            />
        )}
    /> 
    {errors[name] ? <ErrorsMessage message={errors[name].message}/>: null}   
    </FormControl>
   
  )
}

export default CheckboxFields
