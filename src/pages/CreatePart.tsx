import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// `Hooks`.
import { useHistory } from "react-router-dom";

// `Material` Components.
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

// Tiny Redux.
import { tinyConnect } from '../lib/tinyReactRedux';

// `Actions`.
import * as actionTypes from '../store/actions/actionTypes';

const CreatePart = ({ createPart }) => {
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
 
    createPart({
      name: partName, id: uuidv4(), status: checkStatus
    });
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

const mapStateToProps = (state) => {
  return {
    parts: state.parts.items,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    createPart: (partItem) => dispatch({ type: actionTypes.CREATE_PART, partItem }),
  }
}

export default tinyConnect(mapStateToProps, mapDispatchToProps)(CreatePart);