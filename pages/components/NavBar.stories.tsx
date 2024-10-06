import { Meta } from '@storybook/react/*';
import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is in the same directory

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters:{
    docs: {
      subtitle: 'navbar component'
    }
  }
};

export default meta;

const navigationLinks = [
  { name: 'Home', url: '/' },
  { name: 'Features', url: '/features' },
  { name: 'Pricing', url: '/pricing' },
];

export const DefaultNavbar = () => (
  <Navbar items={navigationLinks}>
    {/* No additional props needed for default behavior */}
  </Navbar>
);

export const NavbarWithCustomLinks = () => (
  <Navbar items={[
    { name: 'About Us', url: '/about' },
    { name: 'Contact', url: '/contact' },
  ]}>
    {/* No additional props needed here either */}
  </Navbar>
);

export const NavbarWithoutCTA = () => (
  <Navbar items={navigationLinks} />
);
