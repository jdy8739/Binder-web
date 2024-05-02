import type { Meta, StoryObj, StoryFn } from '@storybook/react';

import Dropdown from '../../components/atoms/dropdown/Dropdown';
import AlarmOption from '/components/atoms/option/AlarmOption';

type StoryComponent = StoryObj<typeof Dropdown>;
type StoryTemplate = StoryFn<typeof Dropdown>;

export default {
  component: Dropdown,
  tags: ['autodocs'],
} as Meta<typeof Dropdown>;

const Template: StoryTemplate = (args) => {
  return (
    <div style={{ height: '500px' }}>
      <Dropdown {...args} />
    </div>
  );
};

export const Default: StoryComponent = {
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
  args: {
    trigger: <div>trigger</div>,
    header: <div>header</div>,
    footer: <div>footer</div>,
    optionComponent: AlarmOption,
    optionList: [
      { value: 0, label: 0, time: 434234234 },
      { value: 1, label: 1, time: 434234234, clicked: true },
      { value: 2, label: 2, time: 434234234 },
    ],
    height: 396,
  },
  render: Template,
};
