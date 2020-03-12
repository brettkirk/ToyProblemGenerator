import React from 'react';
import Paper from '@material-ui/core/Paper';

function Card(props) {
  return (
    <Paper>
      <div className="Card" style={{backgroundColor: props.color || "white", color: props.text || "black", padding: "10px"}} >
        {props.content}
      </div>
    </Paper>
  );
}

export default Card;
