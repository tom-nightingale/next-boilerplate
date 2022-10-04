import Container from './Container';
import defineArgs from '../Storybook/ArgTypes';

export default {
    title: 'Components/Container',
    component: Container,
    parameters: {
        docs: {
            description: {
                component: 'A centered container with set max-width property',
            },
        },
    },
}

const Template = (args) => (
    <Container>
        <div className="w-full bg-gray-100 min-h-[25vh]">
            This should show the container.
        </div>
    </Container>
)

export const Primary = Template.bind({});