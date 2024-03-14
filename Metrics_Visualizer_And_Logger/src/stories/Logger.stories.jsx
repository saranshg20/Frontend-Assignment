import React from 'react';

import Logger from './Logger';

export default {
  title: 'Components/Logger',
  component: Logger,
  args: {},
}

const Template = (args) => <Logger {...args} timeStamps={["10:00", "11:00"]} logs={[
  
]} duration={"5"}/>;

export const Story = Template.bind({});
Story.args = {};
