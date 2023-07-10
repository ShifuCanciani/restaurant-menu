import { FormControl, MenuItem, TextField } from "@mui/material"

const SelectFields = ({label}) => {
  return (
    <FormControl  sx={
        {mb: '1rem',
        width: { sm: 200, md: 300 }
        }
        }>
        <TextField select label={label} variant="filled">
            <MenuItem value="Table">Table</MenuItem>
            <MenuItem value="Terrasse">Terrasse</MenuItem>
            <MenuItem value="Vue panoramique">Vue panoramique</MenuItem>
            <MenuItem value="Bar">Bar</MenuItem>
        </TextField>
    </FormControl>
  )
}

export default SelectFields
