import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

const customViewports = {
  iPhoneSE: {
    name: 'iPhone SE',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iPhone8: {
    name: 'iPhone 8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPhone8Plus: {
    name: 'iPhone 8 Plus',
    styles: {
      width: '414px',
      height: '736px',
    },
  },
  iPhone11Pro: {
    name: 'iPhone 11 Pro',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhone11: {
    name: 'iPhone 11',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  iPhone11ProMax: {
    name: 'iPhone 11 Pro Max',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  iPadMini7_9: {
    name: 'iPad Mini 7.9"',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  iPadPro9_7: {
    name: 'iPad Pro 9.7"',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  iPadPro11: {
    name: 'iPad Pro 11"',
    styles: {
      width: '834px',
      height: '1194px',
    },
  },
  iPadPro12_9: {
    name: 'iPad Pro 12.9"',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
};

addParameters({
  options: {
    theme: themes.dark,
  },
  viewport: {
    viewports: customViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
});