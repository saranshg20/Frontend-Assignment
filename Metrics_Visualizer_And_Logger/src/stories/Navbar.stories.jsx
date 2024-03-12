import React, { useState } from "react";
import { MemoryRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar";

export default {
    title: "Components/Navbar",
    component: Navbar,
    decorators: [(Story) => <Router><Story /></Router>],
};

const Template = (args) => {
    const [duration, setDuration] = useState("5");
    return <Navbar {...args} duration={duration} setDuration={setDuration} />
};

export const Default = Template.bind({});
Default.args = {
    showMetrics: false,
};