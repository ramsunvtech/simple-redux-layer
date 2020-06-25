import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

// Stylesheet.
import useStyles from './Header.style';

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar data-testid="header">
        <Toolbar>
          <Typography variant="h6" data-testid="title">Simple Redux Layer</Typography>&nbsp; - &nbsp;
          <Link to="/" className={classes.topLink}>
            <Typography variant="h6" data-testid="home">Home</Typography>
          </Link>
          &nbsp; | &nbsp;
          <Link to="/create" className={classes.topLink}>
            <Typography variant="h6" data-testid="create">Create Part</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
