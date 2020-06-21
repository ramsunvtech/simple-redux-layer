import React, { useState, useEffect } from 'react';
import Part from '../components/Part';

// `Material` Components.
import Grid from '@material-ui/core/Grid';

// Stylesheet.
import useStyles from './Home.style';

// Tiny Redux.
import { tinyConnect } from '../lib/customReactRedux';

const Home = ({ parts = [] }) => {
  const classes = useStyles();
  const [partItemList] = useState(parts);

  return (
    <Grid container>
      {partItemList.map((partItem: object) => {
        return (
          <Grid item xl={3} className={classes.item}>
            <Part name={partItem.name} id={partItem.id} status={partItem.status} />
          </Grid>
        );
      })}
    </Grid>
  );
};

// export default tinyConnect(Home);

const mapStateToProps = (state) => {
  return {
    parts: state.parts.items,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    loadParts: () => dispatch({ type: 'LOAD_PARTS' }),
  }
}

export default tinyConnect(mapStateToProps)(Home);
