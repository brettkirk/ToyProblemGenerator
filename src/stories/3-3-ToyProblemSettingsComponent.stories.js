import React from 'react';
import { action } from '@storybook/addon-actions';
import ToyProblemSettings from '../components/ToyProblemSettings.js';

export default {
  title: 'Settings Dialog Box/Components',
  component: ToyProblemSettings,
};

export const ToyProblemSettingsView = () => (
  <ToyProblemSettings />
);
