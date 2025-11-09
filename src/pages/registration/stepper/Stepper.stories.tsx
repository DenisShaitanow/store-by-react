import type { Meta, StoryObj } from '@storybook/react-vite';

import Stepper from './Stepper';

const meta: Meta<typeof Stepper> = {
    title: 'shared/ui/Stepper',
    component: Stepper,
    argTypes: {
        currentStep: { control: { type: 'number', min: 1 } },
        overallSteps: { control: { type: 'number', min: 1 } }
    }
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Step1: Story = {
    args: {
        currentStep: 1,
        overallSteps: 3
    }
};

export const Step2: Story = {
    args: {
        currentStep: 2,
        overallSteps: 3
    }
};

export const Step3: Story = {
    args: {
        currentStep: 3,
        overallSteps: 3
    }
};
