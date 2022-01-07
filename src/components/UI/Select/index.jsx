import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MUISelect = ({ value, onChange, options, label }) => {

  const onSortingSelected = (event) => {
    onChange(event.target.value)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="selectLabel">{label}</InputLabel>
      <Select
        labelId={`select${label}`}
        id={`select${label}Id`}
        value={value}
        onChange={onSortingSelected}
        autoWidth
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {options.map((option) => (
          <MenuItem 
            value={option.value}
            key={option.value}
            >
              {option.label}
          </MenuItem>
        ))}

      </Select>
    </FormControl>
  );
};

export default MUISelect;
