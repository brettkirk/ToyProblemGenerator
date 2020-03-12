import React from 'react';
import { action } from '@storybook/addon-actions';
import ColorSettings from '../components/ColorSettings.js';

export default {
  title: 'Settings Dialog Box/Components',
  component: ColorSettings,
};

export const ColorSettingsView = () => (
  <ColorSettings />
);
