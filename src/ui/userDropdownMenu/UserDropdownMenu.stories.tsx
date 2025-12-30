import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserDropdownMenu } from "./UserDropdownMenu";

const meta: Meta<typeof UserDropdownMenu> = {
  title: "Shared/UserDropdownMenu",
  component: UserDropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Dropdown меню пользователя с аватаром, именем и действиями",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: ["bottom-left", "bottom-right", "top-left", "top-right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockAction = (actionName: string) => () => {
  console.log(`${actionName} clicked`);
};

export const Default: Story = {
  args: {
    user: {
      name: "Мария",
      avatarUrl: "https://i.pravatar.cc/64?img=1",
    },
    onPersonalCabinetClick: mockAction("Личный кабинет"),
    onLogoutClick: mockAction("Выйти из аккаунта"),
    placement: "bottom-right",
  },
};

export const WithoutAvatar: Story = {
  args: {
    user: {
      name: "Алексей",
    },
    onPersonalCabinetClick: mockAction("Личный кабинет"),
    onLogoutClick: mockAction("Выйти из аккаунта"),
    placement: "bottom-right",
  },
};

export const LongName: Story = {
  args: {
    user: {
      name: "Ярослав",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    onPersonalCabinetClick: mockAction("Личный кабинет"),
    onLogoutClick: mockAction("Выйти из аккаунта"),
    placement: "bottom-right",
  },
};

export const Disabled: Story = {
  args: {
    user: {
      name: "Елена",
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    onPersonalCabinetClick: mockAction("Личный кабинет"),
    onLogoutClick: mockAction("Выйти из аккаунта"),
    placement: "bottom-right",
    disabled: true,
  },
};

export const AllPlacements: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        padding: "80px",
      }}
    >
      {[
        {
          placement: "bottom-left",
          user: {
            name: "Bottom Left",
            avatarUrl:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
          },
        },
        {
          placement: "bottom-right",
          user: {
            name: "Bottom Right",
            avatarUrl:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
          },
        },
        {
          placement: "top-left",
          user: {
            name: "Top Left",
            avatarUrl:
              "https://images.unsplash.com/photo-1494790108755-2616b612b000?w=400&h=400&fit=crop&crop=face",
          },
        },
        {
          placement: "top-right",
          user: {
            name: "Top Right",
            avatarUrl:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
          },
        },
      ].map(({ placement, user }) => (
        <UserDropdownMenu
          key={placement}
          placement={placement as any}
          user={user}
          onPersonalCabinetClick={mockAction(`${placement} - Личный кабинет`)}
          onLogoutClick={mockAction(`${placement} - Выйти из аккаунта`)}
        />
      ))}
    </div>
  ),
  parameters: { layout: "fullscreen" },
};
