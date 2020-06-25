import React, { useState } from 'react';

// `Hooks`.
import { useHistory } from "react-router-dom";

// `Material` Components.
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

// Tiny Redux.
import { tinyConnect } from '../../lib/tinyReactRedux';

// `Actions`.
import * as actionTypes from '../../store/actions/actionTypes';

// Stylesheet.
import useStyles from './CreatePart.style';

// `Models`.
import Part from '../../models/Part';

interface CreatePartPageProps {
  createPart: (part: Part) => void;
};

export const CreatePart: React.FC<CreatePartPageProps> = ({ createPart }) => {
  const classes = useStyles();
  const history = useHistory();
  const [checkStatus, setCheckStatus] = useState(true);
  const [partName, setPartName] = useState('');

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckStatus(!checkStatus);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPartName(event.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createPart({
      name: partName, id: Date.now(), status: checkStatus
    });
    history.push('/');
  };

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <Grid container>
        <Grid item xl={12}>
          <Typography variant="h4" gutterBottom>
            Create Part
          </Typography>
        </Grid>
        <Grid item xl={5} sm={12} className={classes.nameField}>
          <TextField
            id="name"
            label="Name"
            value={partName}
            InputProps={{
              style: {
                color: 'black'
              }
            }}
            color="secondary"
            onChange={handleNameChange}
            fullWidth
          />
        </Grid>
        <Grid item xl={12} sm={12} className={classes.statusField}>
          <FormControlLabel
            control={
              <Switch
                checked={checkStatus}
                onChange={handleSwitch}
                color="primary"
                name="switch"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Status"
          />
        </Grid>
        <Grid item xl={3} sm={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Part
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    createPart: (partItem: Part) => dispatch({ type: actionTypes.CREATE_PART, partItem }),
  }
}

export default tinyConnect(() => {}, mapDispatchToProps)(CreatePart);