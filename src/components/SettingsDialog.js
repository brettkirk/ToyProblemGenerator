import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// import Input from '@material-ui/core/Input';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SettingsIcon from '@material-ui/icons/Settings';

import ColorSettings from './ColorSettings.js';
import CodeSettings from './CodeSettings.js';
import ToyProblemSettings from './ToyProblemSettings.js';

function SettingsDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = scrollType => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <IconButton onClick={handleClickOpen()} aria-label="settings">
        <SettingsIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Settings</DialogTitle>
        <DialogContent dividers="true">
            <ColorSettings />
            <CodeSettings />
            <ToyProblemSettings />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SettingsDialog;