import React from 'react';
import FancyLink from './FancyLink';

export default {
    title: 'Components/FancyLink',
    component: FancyLink,
    parameters: {
        docs: {
        description: {
            component: 'A text based internal link with accessibility text and custom class overrides.',
        },
        },
    },
    argTypes: {
        destination: {
            control: "text",
            description: "Where should this link go to?",
            table: {
                type: { summary: 'string' },
            },
        },
        a11yText: {
            control: "text",
            description: "Accessibility text",
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            control: "text",
            description: "Label of the link",
            table: {
                type: { summary: 'string' },
            },
        },
        extraClasses: {
            control: "text",
            description: "Space-separated tailwind classes",
            table: {
                type: { summary: 'string' },
            },
        },
    }
}

const Template = (args) => <FancyLink {...args} />

export const Primary = Template.bind({});
Primary.args = {
    destination: "https://www.google.com",
    a11yText: "Go to google.com",
    label: "A text based link",
    extraClasses: "",
}