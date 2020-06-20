import React, { useState } from 'react';
import Part from '../components/Part';

// `Material` Components.
import Grid from '@material-ui/core/Grid';

// Stylesheet.
import useStyles from './Home.style';

const Home = () => {
  const classes = useStyles();
  let items: array = [];

  try {
    const parts = JSON.parse(window.sessionStorage.getItem('parts'));
    items = parts.items || [];
  } catch (e) {

  }
  const [partItemsList] = useState(items);

  return (
    <Grid container>
      {partItemsList.map((partItem: object) => {
        return (
          <Grid item xl={3} className={classes.item}>
            <Part name={partItem.name} id={partItem.id} status={partItem.status} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
