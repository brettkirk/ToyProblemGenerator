import React from 'react';
import { action } from '@storybook/addon-actions';
import CodeSettings from '../components/CodeSettings.js';

export default {
  title: 'Settings Dialog Box/Components',
  component: CodeSettings,
};

export const CodeSettingsView = () => (
  <CodeSettings />
);
