import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// `Material` Components.
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

// `Hooks`.
import { useHistory } from "react-router-dom";

const CreatePart = () => {
  const history = useHistory();
  const [checkStatus, setCheckStatus] = useState(true);
  const [partName, setPartName] = useState('');

  const handleSwitch = (event: any) => {
    console.log(event.target.name);
    console.log(event.target.checked);
    setCheckStatus(!checkStatus);
  };
  
  const handleNameChange = (event: any) => {
    console.log(event.target.value);
    setPartName(event.target.value);
  };

  const onSubmit = (e: any) => {
    // alert('form submit');
    e.preventDefault();
    const { items = [] } = JSON.parse(window.sessionStorage.getItem('parts'));

    const parts = {
      items: [
        ...items,
        {
          name: partName, id: uuidv4(), status: 'Checked In'
        }
      ]
    };
    window.sessionStorage.setItem('parts', JSON.stringify(parts));
    history.push('/');
  };

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField id="name" label="Name" value={partName} style={{color: 'black'}} color="secondary" onChange={handleNameChange} />
      <Switch
        checked={checkStatus}
        onChange={handleSwitch}
        color="primary"
        name="switch"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Button type="submit" variant="contained" color="primary">
        Create Part
      </Button>
    </form>
  );
};

export default CreatePart;
