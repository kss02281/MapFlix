import React, { useState } from 'react';
import { useBorderSelectStyles } from '@mui-treasury/styles/select/border';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function BorderSelect() {
  const [val,setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const borderSelectClasses = useBorderSelectStyles();

  // moves the menu below the select input
  const menuProps = {
    classes: {
      list: borderSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "right"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "right"
    },
    getContentAnchorEl: null
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + borderSelectClasses.icon}/>
    )};

  return (
    <FormControl>
      <InputLabel
        className={borderSelectClasses.label}
        id="inputLabel"
        style={{color:'white'}}
      >LABEL</InputLabel>
      <Select
        disableUnderline
        classes={{ root: borderSelectClasses.select, }}
        labelId="inputLabel"
        IconComponent={iconComponent}
        MenuProps={menuProps}
        value={val}
        onChange={handleChange}
        style={{backgroundColor:'white'}}
      >
        <MenuItem value={0}>None</MenuItem>
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
      </Select>
    </FormControl>
  );
};


export default BorderSelect;