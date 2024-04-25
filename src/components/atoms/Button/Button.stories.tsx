import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Button, { ButtonProps } from './Button';
import { theme } from '../../../theme/theme'; // Update the path to your theme file

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<ButtonProps> = (args:ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click Me!',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};
