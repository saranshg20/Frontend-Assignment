import React from 'react';

import Logger from './Logger';

export default {
  title: 'Components/Logger',
  component: Logger,
  args: {},
}

const Template = (args) => <Logger {...args} />;

export const Story = Template.bind({});
Story.args = {};
