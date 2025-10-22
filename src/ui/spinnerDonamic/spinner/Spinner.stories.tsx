import type { Meta, StoryObj } from '@storybook/react-vite';

import { SpinnerDynamic } from './SpinnerDinamic';

const meta: Meta<typeof SpinnerDynamic> = {
    title: 'UI/SpinnerDynamic',
    component: SpinnerDynamic
};

export default meta;

type Story = StoryObj<typeof SpinnerDynamic>;

export const DefaultSpinner: Story = {
    args: {
        size: 50,
        color: '#d1d2d6'
    },
    render: args => <SpinnerDynamic {...args} />
};

export const LargeSpinner: Story = {
    args: {
        ...DefaultSpinner.args,
        size: 100
    },
    render: args => <SpinnerDynamic {...args} />
};

export const CustomColorSpinner: Story = {
    args: {
        ...DefaultSpinner.args,
        color: '#FF0000 #00FF00 #0000FF #FFFF00'
    },
    render: args => <SpinnerDynamic {...args} />
};
