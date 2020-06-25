import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import breakpoints from './breakPoints';
import typography from './typography';

const theme = createMuiTheme({
  breakpoints,
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
