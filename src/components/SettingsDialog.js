// React / related dependencies
import React from 'react';

// MUI elements
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Icons
import SettingsIcon from '@material-ui/icons/Settings';

// Custom Elements
import ColorSettings from './ColorSettings.js';
import CodeSettings from './CodeSettings.js';
import ToyProblemSettings from './ToyProblemSettings.js';

// PropTypes definition
import PropTypes from 'prop-types';

function SettingsDialog() {
  SettingsDialog.propTypes = {
    status: PropTypes.oneOf(['positive', 'negative', 'neutral']),
  }

  SettingsDialog.defaultProps = {
    status: 'neutral',
  }

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
    <div data-testid="settings-button">
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