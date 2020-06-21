import React, { useState, useEffect } from 'react';
import Part from '../components/Part';

// `Material` Components.
import Grid from '@material-ui/core/Grid';

// Stylesheet.
import useStyles from './Home.style';


// Tiny Redux.
import { getStore } from '../lib/customRedux';
// import { tinyConnect } from '../lib/customReactRedux';

const tinyConnect = (Component): React.FC => ({
  loading,
  ...props
}) => {
  return (
    <Component {...props as P} />
  );
}

const Home = () => {
  const classes = useStyles();
  const [partItemList, setPartItemList] = useState([]);

  useEffect(() => {
    const { parts = {} } = getStore();
    const { items = [] } = parts;

    setPartItemList(items);
  }, [window.appStore]);

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

export default tinyConnect(Home);

const mapStateToProps = (state) => {
  return {
    parts: state.parts,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    loadParts: () => dispatch({ type: 'LOAD_PARTS' }),
  }
}

// export default tinyConnect(Home);
