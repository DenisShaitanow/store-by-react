import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { BaseDropdown } from './BaseDropdown';
import type { PlacementType } from './types';

const meta: Meta<typeof BaseDropdown> = {
    title: 'Shared/BaseDropdown',
    component: BaseDropdown,
    parameters: { layout: 'centered' },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
};
const menuStyle = { padding: '8px', minWidth: '160px' };
const menuItemStyle = {
    padding: '8px',
    border: 'none',
    background: 'none',
    width: '100%',
    textAlign: 'left' as const,
    cursor: 'pointer'
};

export const Default: Story = {
    args: {
        trigger: (
            <button
                style={{
                    ...buttonStyle,
                    background: '#7CB342',
                    color: 'white'
                }}
            >
                Открыть меню
            </button>
        ),
        children: (
            <div style={menuStyle}>
                <button style={menuItemStyle}>Профиль</button>
                <button style={menuItemStyle}>Настройки</button>
                <hr
                    style={{
                        margin: '8px 0',
                        border: 'none',
                        borderTop: '1px solid #e5e7eb'
                    }}
                />
                <button style={{ ...menuItemStyle, color: 'red' }}>
                    Выйти
                </button>
            </div>
        )
    }
};

export const Controlled: Story = {
    render: function ControlledStory(args) {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <BaseDropdown
                    {...args}
                    isOpen={isOpen}
                    onToggle={setIsOpen}
                    trigger={
                        <button
                            style={{
                                ...buttonStyle,
                                background: '#2196F3',
                                color: 'white'
                            }}
                        >
                            Контролируемый
                        </button>
                    }
                />
                <button
                    onMouseDown={e => {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                    }}
                    style={{
                        ...buttonStyle,
                        background: 'white',
                        border: '1px solid #ccc'
                    }}
                >
                    {isOpen ? 'Закрыть' : 'Открыть'}
                </button>
            </div>
        );
    },
    args: { children: <div style={menuStyle}>Контролируемый контент</div> }
};

export const Placements: Story = {
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
                padding: '60px'
            }}
        >
            {[
                { placement: 'bottom-left', color: '#7CB342' },
                { placement: 'bottom-right', color: '#FF9800' },
                { placement: 'top-left', color: '#E91E63' },
                { placement: 'top-right', color: '#9C27B0' }
            ].map(({ placement, color }) => (
                <BaseDropdown
                    key={placement}
                    placement={placement as PlacementType}
                    trigger={
                        <button
                            style={{
                                ...buttonStyle,
                                background: color,
                                color: 'white'
                            }}
                        >
                            {placement}
                        </button>
                    }
                    children={<div style={menuStyle}>Контент {placement}</div>}
                />
            ))}
        </div>
    ),
    parameters: { layout: 'fullscreen' }
};

export const Notifications: Story = {
    args: {
        trigger: (
            <div
                style={{
                    position: 'relative',
                    padding: '0px',
                    background: '#f5f5f5',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                >
                    <path
                        stroke="#253017"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3.527 14.493c-.192 1.255.664 2.125 1.712 2.559 4.016 1.665 9.605 1.665 13.622 0 1.048-.434 1.904-1.305 1.712-2.559-.117-.771-.7-1.413-1.13-2.04-.565-.832-.62-1.738-.621-2.703 0-3.728-3.03-6.75-6.772-6.75-3.741 0-6.773 3.022-6.773 6.75 0 .965-.055 1.872-.62 2.703-.43.627-1.012 1.269-1.13 2.04Z"
                    />
                    <path
                        stroke="#253017"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M8.45 18.3c.411 1.553 1.868 2.7 3.6 2.7s3.186-1.147 3.6-2.7"
                    />
                </svg>
                <span
                    style={{
                        position: 'absolute',
                        top: '2px',
                        right: '2px',
                        background: '#E0796E',
                        color: 'white',
                        borderRadius: '50%',
                        width: '12px',
                        height: '12px'
                    }}
                />
            </div>
        ),
        children: (
            <div style={{ width: '250px', maxHeight: '300px' }}>
                <div
                    style={{
                        padding: '12px 16px',
                        borderBottom: '1px solid #e5e7eb',
                        fontWeight: 'bold'
                    }}
                >
                    Новые уведомления
                </div>
                {[1, 2].map(i => (
                    <div
                        key={i}
                        style={{
                            padding: '12px 16px',
                            borderBottom: '1px solid #f5f5f5'
                        }}
                    >
                        <div>Иван предлагает обмен</div>
                        <div style={{ fontSize: '12px', color: '#666' }}>
                            2 мин назад
                        </div>
                    </div>
                ))}
            </div>
        ),
        placement: 'bottom-right'
    }
};
