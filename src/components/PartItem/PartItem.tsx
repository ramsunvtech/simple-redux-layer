import React from 'react';

// `Material` Components.
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// `Models`.
import Part from '../../models/Part';

// Stylesheet.
import useStyles from './PartItem.style';

const PartItem = ({
  name,
  id,
  status,
}: Part) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2"  data-testid="name" >
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          ID: {id}
        </Typography>
        <Typography variant="body2" component="p">
          Status: {status}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PartItem;
