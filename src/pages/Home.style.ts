import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  item: {
    margin: theme.spacing(2, 5),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2),
    },
  },
}));