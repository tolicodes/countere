import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Carousel, {CarouselProps} from '.';

import { items } from '../../models/Item'

export default {
  title: 'components/Carousel',
  component: Carousel,
  argTypes: {},
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items
};
