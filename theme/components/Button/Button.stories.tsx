import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '@chakra-ui/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colorScheme: {
      control: {
        type: 'radio',
        options: ['blue', 'gray']
      }
    },
    variant: {
      control: {
        type: 'radio',
        options: ['solid', 'outline', 'ghost', 'link']
      }
    }
  }
} as Meta;

const Template: Story = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  colorScheme: "blue",
  isDisabled: false,
  variant: "solid",
  isLoading: false
};