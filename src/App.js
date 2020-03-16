// React / related dependencies
import React from 'react';
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// MUI elements
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Custom elements
import SettingsDialog from './components/SettingsDialog.js';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0} style={{backgroundColor: theme.palette.background.default}}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Paper style={{height: '100vh'}}>
              <Grid container spacing={0} justify="space-between">
                <Grid item xs={true} />
                <Grid item xs={false}>
                  <SettingsDialog />
                </Grid>
              </Grid>
              <Typography variant="h3" align="center" gutterBottom={true}>Toy Problem Generator</Typography>
              <Input placeholder="Test"></Input>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
