import React, { useState, useEffect } from 'react';
import Part from '../components/Part';

// `Material` Components.
import Grid from '@material-ui/core/Grid';

// Stylesheet.
import useStyles from './Home.style';

// Tiny Redux.
import { tinyConnect } from '../lib/tinyReactRedux';

// `Actions`.
import * as actionTypes from '../store/actions/actionTypes';

const Home = ({ loadParts = () => {}, parts = [] }) => {
  const classes = useStyles();
  const [partItemList, setPartList] = useState([]);

  useEffect(() => {
    loadParts();
    setPartList(parts);
  }, []);

  const getStatusText = (status) => {
    return (status) ? 'Checked In' : 'Checked Out';
  }

  return (
    <Grid container>
      {partItemList.map((partItem: object) => {
        return (
          <Grid item xl={3} className={classes.item}>
            <Part name={partItem.name} id={partItem.id} status={getStatusText(partItem.status)} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    parts: state.parts.items,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadParts: () => dispatch({ type: actionTypes.LOAD_PARTS }),
  }
}

export default tinyConnect(mapStateToProps, mapDispatchToProps)(Home);
