import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from '../components/Card.js';

export default {
  title: 'Card',
  component: Card,
};

export const BasicText = () => <Card content="This is a test" />;

export const ColorBackground = () => <Card content="This background is light blue" color="#BBDDFF" />;

export const ColorText = () => <Card content="This text is light blue" text="#BBDDFF" />;

let object = {content: "This was loaded from an object", color: "#222223", text: "#F0F0F0"}
export const ObjectDefined = () => <Card content={object.content} color={object.color} text={object.text} />;
