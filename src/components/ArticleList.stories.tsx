import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ArticleList, { IArticleList } from './ArticleList';

import { items } from '../models/Item'

export default {
  title: 'components/ArticleList',
  component: ArticleList,
  argTypes: {},
} as Meta;

const Template: Story<IArticleList> = (args) => <ArticleList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    items
};
