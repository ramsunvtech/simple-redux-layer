import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Header = () => (
  <Fragment>
    <AppBar>
      <Toolbar>
      <Typography variant="h6">Simple Redux Layer</Typography>&nbsp; - &nbsp;
        <Link to="/" style={{color: 'white', textDecoration: 'none' }}>
          <Typography variant="h6">Home</Typography>
        </Link>
        &nbsp; | &nbsp; 
        <Link to="/create" style={{color: 'white', textDecoration: 'none' }}>
          <Typography variant="h6">Create Part</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  </Fragment>
);

export default Header;
