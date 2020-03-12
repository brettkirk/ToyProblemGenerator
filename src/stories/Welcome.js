import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function Welcome() {
  return (
    <Paper style={{padding: '10px'}}>
      <Typography variant="h3">Toy Problem Generator Storybook</Typography>
      <br />
      <Typography>This is the UI component dev environment for the Toy Problem Generator webapp.</Typography>
      <br />
      <Typography>In the heirarchy on the left you can find categories representing different main UI components. If a UI component has differnt sub-components the category will contain an additional folder titled "Components".</Typography>
      <br />
      <Typography>Within the categories is a number of stories, each story represents a differnt state the compoennt can be in. These act as visual test cases for the UI to ensure nothing breaks or looks wrong.</Typography>
    </Paper>
  );
}

export default Welcome;
