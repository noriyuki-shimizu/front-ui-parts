import type { ArgTypeObject, Meta, StoryObj } from '@storybook/vue3'
import Tag from './index.vue'

// TODO: Watch: https://github.com/storybookjs/storybook/issues/24238
const TagComponent = Tag as Record<string, unknown>

const meta = {
  title: 'Data Display/Tag',
  component: TagComponent,
  tags: ['autodocs'],
  argTypes: {
    /* slots.default */
    default: {
      description: 'タグ内のテキスト',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      }
    }
  },
  decorators: [() => ({ template: '<div style="display: flex; gap: 8px"><story /></div>' })]
} satisfies Meta<typeof TagComponent> & ArgTypeObject // TODO: Watch: https://github.com/storybookjs/storybook/issues/23352

export default meta

type Story = StoryObj<typeof meta>

export const Border: Story = {
  render: (args) => ({
    components: { Tag: TagComponent },
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
    components: { Tag: TagComponent },
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
    components: { Tag: TagComponent },
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
