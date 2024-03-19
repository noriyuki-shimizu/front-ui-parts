import type { ArgTypeObject, Meta, StoryObj } from '@storybook/vue3'
import Tag from './index.vue'

const meta = {
  title: 'Data Display/Tag',
  // TODO: Watch: https://github.com/storybookjs/storybook/issues/24238
  component: Tag as Record<string, unknown>,
  tags: ['autodocs'],
  argTypes: {
    /* slots.default */
    default: {
      description: 'タグ内のテキスト',
      type: 'string',
      control: 'text'
    }
  },
  decorators: [() => ({ template: '<div style="display: flex; gap: 8px"><story /></div>' })]
} satisfies Meta<typeof Tag> | ArgTypeObject // TODO: Watch: https://github.com/storybookjs/storybook/issues/23352

export default meta

type Story = StoryObj<typeof meta>

export const Border: Story = {
  render: (args) => ({
    components: { Tag: Tag as Record<string, unknown> },
    setup() {
      return args
    },
    template: `
      <Tag bordered>Normal</Tag>
      <Tag bordered color="processing">Processing</Tag>
      <Tag bordered color="success">Success</Tag>
      <Tag bordered color="error">Error</Tag>
      <Tag bordered color="warning">Warning</Tag>
    `
  })
}

export const NoBorder: Story = {
  render: (args) => ({
    components: { Tag: Tag as Record<string, unknown> },
    setup() {
      return args
    },
    template: `
      <Tag>Normal</Tag>
      <Tag color="processing">Processing</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="error">Error</Tag>
      <Tag color="warning">Warning</Tag>
    `
  })
}

export const Hover: Story = {
  render: (args) => ({
    components: { Tag: Tag as Record<string, unknown> },
    setup() {
      return args
    },
    template: `
      <Tag hovered>Normal</Tag>
      <Tag hovered color="processing">Processing</Tag>
      <Tag hovered color="success">Success</Tag>
      <Tag hovered color="error">Error</Tag>
      <Tag hovered color="warning">Warning</Tag>
    `
  })
}
