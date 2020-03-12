import React from 'react';
import { action } from '@storybook/addon-actions';
import SettingsDialog from '../components/SettingsDialog.js';

export default {
  title: 'Settings Dialog Box',
  component: SettingsDialog,
};

export const DefaultTextBox = () => (
  <SettingsDialog />
);
