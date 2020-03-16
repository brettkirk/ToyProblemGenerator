// React / related dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI elements
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Icons
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness5Icon from '@material-ui/icons/Brightness5';

const useStyles = makeStyles(theme => ({
  darkButton: {
    margin: theme.spacing(1),
    background: 'linear-gradient(45deg, #263238 30%, #37474f 90%)',
    color: 'white',
    width: '100%',
  },
  lightButton: {
    margin: theme.spacing(1),
    background: 'linear-gradient(45deg, #cfd8dc 30%, #eceff1 90%)',
    color: 'black',
    width: '100%',
  },
}));

function ColorSettings() {
  const classes = useStyles();

  return (
    <div>
      <Typography>Color Settings</Typography>
      <Grid container spacing={0} direction="column">
        <Grid item xs={11}>
          <Button
            variant="contained"
            className={classes.darkButton}
            startIcon={<Brightness3Icon />}
            disableRipple={true}
            disabled
          >
            Dark Mode
          </Button>
        </Grid>
        <Grid item xs={11}>
          <Button
            variant="contained"
            className={classes.lightButton}
            startIcon={<Brightness5Icon />}
            disableRipple={true}
            disabled
          >
            Light Mode
          </Button>
        </Grid>
      </Grid>
      <Divider style={{margin:'10px 0px'}} />
    </div>
  );
}

export default ColorSettings;