// React / related dependencies
import React from 'react';

// MUI elements
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function CodeSettings() {

  const [state, setState] = React.useState({
    CPP: false,
    CSharp: false,
    ObjectiveC: false,
    COBOL: false,
    FORTRAN: false,
    golang: false,
    Java: false,
    JavaScript: true,
    Kotlin: false,
    Perl: false,
    PHP: false,
    Python: false,
    Ruby: false,
    Rust: false,
    Scala: false,
    Swift: false,
    TypeScript: false,
    x86: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Typography>Known Languages</Typography>
      <FormGroup row>
        <Grid container spacing={0}>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.CPP} 
                  onChange={handleChange('CPP')} 
                  value="CPP" 
                  color="primary"
                />
              }
              label="C++"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.CSharp} 
                  onChange={handleChange('CSharp')} 
                  value="CSharp" 
                  color="primary"
                />
              }
              label="C#"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.ObjectiveC} 
                  onChange={handleChange('ObjectiveC')} 
                  value="ObjectiveC" 
                  color="primary"
                />
              }
              label="Objective-C"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.COBOL} 
                  onChange={handleChange('COBOL')} 
                  value="COBOL" 
                  color="primary"
                />
              }
              label="COBOL"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.FORTRAN} 
                  onChange={handleChange('FORTRAN')} 
                  value="FORTRAN" 
                  color="primary"
                />
              }
              label="FORTRAN"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.golang} 
                  onChange={handleChange('golang')} 
                  value="golang" 
                  color="primary"
                />
              }
              label="golang"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.Java} 
                  onChange={handleChange('Java')} 
                  value="Java" 
                  color="primary"
                />
              }
              label="Java"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.JavaScript} 
                  onChange={handleChange('JavaScript')} 
                  value="JavaScript" 
                  color="primary"
                />
              }
              label="JavaScript"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.Kotlin} 
                  onChange={handleChange('Kotlin')} 
                  value="Kotlin" 
                  color="primary"
                />
              }
              label="Kotlin"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.Perl} 
                  onChange={handleChange('Perl')} 
                  value="Perl" 
                  color="primary"
                />
              }
              label="Perl"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.PHP} 
                  onChange={handleChange('PHP')} 
                  value="PHP" 
                  color="primary"
                />
              }
              label="PHP"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.Python} 
                  onChange={handleChange('Python')} 
                  value="Python" 
                  color="primary"
                />
              }
              label="Python"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.Ruby} 
                  onChange={handleChange('Ruby')} 
                  value="Ruby" 
                  color="primary"
                />
              }
              label="Ruby"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.Rust} 
                  onChange={handleChange('Rust')} 
                  value="Rust" 
                  color="primary"
                />
              }
              label="Rust"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.Scala} 
                  onChange={handleChange('Scala')} 
                  value="Scala" 
                  color="primary"
                />
              }
              label="Scala"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.Swift} 
                  onChange={handleChange('Swift')} 
                  value="Swift" 
                  color="primary"
                />
              }
              label="Swift"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.TypeScript} 
                  onChange={handleChange('TypeScript')} 
                  value="TypeScript" 
                  color="primary"
                />
              }
              label="TypeScript"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={state.x86} 
                  onChange={handleChange('x86')} 
                  value="x86" 
                  color="primary"
                />
              }
              label="x86"
            />
          </Grid>
        </Grid>
      </FormGroup>
      <Divider style={{margin:'10px 0px'}} />
    </div>
  );
}

export default CodeSettings;