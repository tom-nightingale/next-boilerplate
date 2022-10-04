
import Footer from './Footer';
import defineArgs from '../Storybook/ArgTypes';

export default {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        docs: {
        description: {
            component: 'Footer component',
        },
        },
    },
}

const Template = (args) => <Footer {...args} />

export const Primary = Template.bind({});