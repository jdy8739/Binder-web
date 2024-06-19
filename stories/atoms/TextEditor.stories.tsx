import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import TextEditor from '/components/atoms/text-editor/TextEditor';

type StoryComponent = StoryObj<typeof TextEditor>;
type StoryTemplate = StoryFn<typeof TextEditor>;

export default {
  component: TextEditor,
  tags: ['autodocs'],
} as Meta<typeof TextEditor>;

const Template: StoryTemplate = (args) => {
  return <TextEditor {...args} />;
};

export const Default: StoryComponent = {
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
  args: {},
  render: Template,
};
