import React, { useState, useEffect } from 'react';

// `Material` Components.
import Grid from '@material-ui/core/Grid';

// `Local` Components.
import PartItem from '../../components/PartItem/';

// Stylesheet.
import useStyles from './Home.style';

// Tiny Redux.
import { tinyConnect } from '../../lib/tinyReactRedux';

// `Actions`.
import * as actionTypes from '../../store/actions/actionTypes';

// `Models`.
import Part from '../../models/Part';
import { Store } from '../../models/Store';

interface HomePageProps {
  loadParts: () => Function;
  parts: Part[];
}

export const Home: React.FC<HomePageProps> = ({ loadParts, parts }) => {
  const classes = useStyles();
  const [partItemList, setPartList] = useState<Part[]>([]);

  useEffect(() => {
    loadParts();
    setPartList(parts);
  }, []);

  return (
    <Grid container data-testid="home">
      {partItemList.map((partItem: Part) => {
        return (
          <Grid key={partItem.id} item xl={3} lg={2} className={classes.item}>
            <PartItem data-testid="item" name={partItem.name} id={partItem.id} status={partItem.status} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    parts: state.parts.items,
  };
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    loadParts: () => dispatch({ type: actionTypes.LOAD_PARTS }),
  }
}

export default tinyConnect(mapStateToProps, mapDispatchToProps)(Home);
