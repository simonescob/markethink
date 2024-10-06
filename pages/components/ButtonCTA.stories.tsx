import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonCTA from './ButtonCTA'; // Assuming ButtonCTA is in the same directory

// Define component metadata for better organization
const meta: Meta<typeof ButtonCTA> = {
  title: 'Components/ButtonCTA',
  component: ButtonCTA,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'A useable button for call to action',
    },
  },
};

export default meta;

// Create stories with various prop combinations for comprehensive testing
const Template: StoryFn<typeof ButtonCTA> = (args: React.JSX.IntrinsicAttributes & { text: any; }) => <ButtonCTA {...args} />;

export const Single = Template.bind({});
Single.args = {
  text: 'Click Me!', // Set a default text
};

export const Actionable = Template.bind({});
Actionable.args = {
  text: 'Secondary Action',
  // Add custom styles if needed (e.g., className: 'btn-cta-secondary')
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  disabled: true, // Set the disabled prop
};

// Optionally, explore visual states with different props or custom components
export const WithIcon = () => {
  // Create a custom component for the icon, or use an existing icon library
  const Icon = () => <svg /* ...icon SVG code... */ />;

  return (
    <ButtonCTA text="Click with Icon"></ButtonCTA>
  );
};
