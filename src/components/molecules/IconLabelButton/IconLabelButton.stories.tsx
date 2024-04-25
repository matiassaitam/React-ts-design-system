import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { FaPlus } from 'react-icons/fa'; 
import IconLabelButton, { IconLabelButtonProps } from './IconLabelButton';
import { theme } from '../../../theme/theme'; 
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Molecules/IconLabelButton',
  component: IconLabelButton,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<IconLabelButtonProps> = (args: JSX.IntrinsicAttributes & IconLabelButtonProps) => <IconLabelButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Icon with Label',
  icon: <FaPlus />,
  variant: 'success',
};
