import React from 'react';
import Plots from './Plots';

export default {
  title: 'Components/Plots',
  component: Plots,
  args: {},
}

const Template = (args) => <Plots {...args} />;

export const Story = Template.bind({});
Story.args = {};
