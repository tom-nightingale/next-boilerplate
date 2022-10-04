import FancyLink from './FancyLink';
import defineArgs from '../Storybook/ArgTypes';

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
        destination: defineArgs("text", "where should this link go to?", "string"),
        a11yText: defineArgs("text", "Accessibility helper text", "string"),
        label: defineArgs("text", "Text to go within the button", "string"),
        extraClasses: defineArgs("text", "Space separated TailwindCSS classes", "string"),
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