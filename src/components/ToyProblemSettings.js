import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ToyProblemSettings() {

  const classes = useStyles();
  const [gen, setGen] = React.useState('Predefined');
  const [dif, setDif] = React.useState('E');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  const handleGenChange = event => {
    setGen(event.target.value);
  };

  const handleDifChange = event => {
    setDif(event.target.value);
  };


  return (
    <div>
      <Typography>Toy Problem Generation Preferences</Typography>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} style={{width: '91%'}}>
            <InputLabel id="generation-style">Generation Type</InputLabel>
            <Select
              labelId="generation-style"
              id="generation-style-select"
              value={gen}
              onChange={handleGenChange}
            >
              <MenuItem value={'Predefined'}>Predefined Prompt</MenuItem>
              <MenuItem value={'ProceduralSimple'}>Procedural Prompt (Simple)</MenuItem>
              <MenuItem value={'ProceduralComplex'}>Procedural Prompt (Complex)</MenuItem>
            </Select>
            <FormHelperText>Select how you want your daily prompt to be generated.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} style={{width: '91%'}}>
            <InputLabel id="difficulty">Difficulty</InputLabel>
            <Select
              labelId="difficulty"
              id="difficulty-select"
              value={dif}
              onChange={handleDifChange}
            >
              <MenuItem value={'E'}>Easy</MenuItem>
              <MenuItem value={'M'}>Medium</MenuItem>
              <MenuItem value={'H'}>Hard</MenuItem>
            </Select>
            <FormHelperText>Select what difficulty level you want your prompts to be.</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Divider style={{margin:'10px 0px'}} />
    </div>
  );
}

export default ToyProblemSettings;