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
    setCheckStatus(!checkStatus);
  };
  
  const handleNameChange = (event: any) => {
    setPartName(event.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
 
    if (window && window.appStore && window.appStore.parts, window.appStore.parts.items) {
      window.appStore.parts.items.push({
        name: partName, id: uuidv4(), status: 'Checked In'
      });
    }
    history.push('/');
  };

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField id="name" label="Name" value={partName} InputProps={{ style: { color: 'black' } }} color="secondary" onChange={handleNameChange} />
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
