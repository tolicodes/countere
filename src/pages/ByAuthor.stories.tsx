import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ByAuthor from './ByAuthor';

export default {
  title: 'pages/ByAuthor',
  component: ByAuthor,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ByAuthor {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
