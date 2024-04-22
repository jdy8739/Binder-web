import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import Dropdown from '../../components/atoms/dropdown/Dropdown';

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
    optionList: [
      { value: 0, content: 0, subContent: 0 },
      { value: 1, content: 1, subContent: 1 },
      { value: 2, content: 2, subContent: 2 },
    ],
  },
  render: Template,
};
