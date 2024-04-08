import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import SignInput from '../../components/atoms/SignInput';

type StoryComponent = StoryObj<typeof SignInput>;
type StoryTemplate = StoryFn<typeof SignInput>;

export default {
  component: SignInput,
  tags: ['autodocs'],
} as Meta<typeof SignInput>;

const Template: StoryTemplate = (args) => {
  return <SignInput {...args} />;
};

export const Default: StoryComponent = {
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
  args: { label: 'test label' },
  render: Template,
};
