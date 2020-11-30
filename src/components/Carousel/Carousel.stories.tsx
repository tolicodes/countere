import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Carousel, {CarouselProps} from '.';

export default {
  title: 'components/Carousel',
  component: Carousel,
  argTypes: {},
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items: [{
    title: '“Leave Society”: An Interview With Tao Lin',
    link: 'http://tbd.com',
    image: 'https://static1.squarespace.com/static/5f9f625ebb288273ba51c6ec/t/5fb7cfa8579d1f4404f938af/1605881832634/tao-lin.png?format=1500w',
    caption: 'We interviewed the elusive author about his new novel “Leave Society” and discussed the mystic.'
  }, {
    title: 'Sample Story 2',
    link: 'http://tbd.com',
    image: 'https://static1.squarespace.com/static/5f9f625ebb288273ba51c6ec/t/5fc3bd3a5147b14804a50df8/1606664221885/sitting-on-utah-monolith.jpeg?format=1500w',
    caption: 'This week, a mysterious Monolith was discovered in the Utah desert. Its remote location and extraterrestrial-seeming origin immediately garnered worldwide headlines.'
  }]
};
