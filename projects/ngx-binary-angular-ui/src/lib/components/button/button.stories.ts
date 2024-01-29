import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from 'ngx-binary-angular-ui';

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const LoggedIn: Story = {
  args: {},
};
