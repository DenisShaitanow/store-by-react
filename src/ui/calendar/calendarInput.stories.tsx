import type { Meta, StoryObj } from '@storybook/react-vite';
import SimpleDatePicker from './datepicker';

const meta: Meta<typeof SimpleDatePicker> = {
    title: 'Shared/Calendar/SimpleDatePicker',
    component: SimpleDatePicker,
    parameters: { layout: 'padded' }
};
export default meta;

type Story = StoryObj<typeof SimpleDatePicker>;

export const Default: Story = {
    // name: 'Default',
    render: () => <SimpleDatePicker />
};
