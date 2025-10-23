import type { Meta, StoryObj } from '@storybook/react-vite';

import { allCategory } from '../../lib/constants';
import { ButtonUI } from '../button';
import { SkillsListHeader } from './SkillsListHeader';

const meta: Meta<typeof SkillsListHeader> = {
    title: 'SkillsListHeader',
    component: SkillsListHeader
};

export default meta;

type Story = StoryObj<typeof SkillsListHeader>;

export const DefaultSkillsListHeader: Story = {
    render: () => (
        <SkillsListHeader
            trigger={
                <ButtonUI
                    label="Все навыки"
                    type="button"
                    secondary={false}
                    tertiary
                />
            }
            allCategory={allCategory}
        />
    )
};
