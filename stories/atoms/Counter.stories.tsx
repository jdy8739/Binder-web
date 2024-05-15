import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import Counter from '/components/atoms/counter/Counter';

type StoryComponent = StoryObj<typeof Counter>;
type StoryTemplate = StoryFn<typeof Counter>;

export default {
  component: Counter,
  tags: ['autodocs'],
} as Meta<typeof Counter>;

const Template: StoryTemplate = (args) => {
  return <Counter {...args} />;
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
    endValue: 100,
    startValue: 0,
  },
  render: Template,
};
