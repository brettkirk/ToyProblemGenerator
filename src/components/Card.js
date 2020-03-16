// React / related dependencies
import React from 'react';

// MUI elements
import Paper from '@material-ui/core/Paper';

// PropTypes definition
import PropTypes from 'prop-types';

function Card(props) {
  Card.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    content: PropTypes.string.isRequired,
  }

  Card.defaultProps = {
    color: 'white',
    text: 'black',
  }

  return (
    <Paper>
      <div className="Card" style={{backgroundColor: props.color || "white", color: props.text || "black", padding: "10px"}} >
        {props.content}
      </div>
    </Paper>
  );
}

export default Card;
