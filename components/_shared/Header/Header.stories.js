
import Header from './Header';
import defineArgs from '../Storybook/ArgTypes';

export default {
    title: 'Components/Header',
    component: Header,
    parameters: {
        docs: {
        description: {
            component: 'Header component',
        },
        },
    },
}

const Template = (args) => <Header {...args} />

export const Primary = Template.bind({});