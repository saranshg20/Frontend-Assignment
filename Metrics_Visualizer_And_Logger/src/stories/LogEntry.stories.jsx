import React from "react";
import LogEntry from "./LogEntry";

export default {
    title: "Components/LogEntry",
    component: LogEntry,
    args: {},
};

const Template = (args) => (
    <div>
        <LogEntry
            {...args}
            type={"info"}
            timeStamp={Date.now()}
            message={"Random Information"}
        />
        <LogEntry
            {...args}
            type={"error"}
            timeStamp={Date.now()}
            message={"Random Information"}
        />
        <LogEntry
            {...args}
            type={"success"}
            timeStamp={Date.now()}
            message={"Random Information"}
        />
    </div>
);

export const Story = Template.bind({});
Story.args = {};
