import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { withA11y } from '@storybook/addon-a11y';
import Welcome from './Welcome';

export default {
  title: 'Welcome',
  component: Welcome,
  decorators: [withA11y],
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'To Storybook',
};
