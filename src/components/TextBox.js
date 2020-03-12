import React from 'react';
import Input from '@material-ui/core/Input';

function TextBox(props) {
  return (
    <Input placeholder={props.placeholder || "Placeholder Text"} inputProps={{ 'aria-label': props.ariaDesc || "A text field" }} />
  );
}

export default TextBox;
