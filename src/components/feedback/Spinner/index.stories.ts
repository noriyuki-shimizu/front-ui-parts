import type { ArgTypeObject, Meta, StoryObj } from '@storybook/vue3'
import Spinner from './index.vue'

// TODO: Watch: https://github.com/storybookjs/storybook/issues/24238
const SpinnerComponent = Spinner as Record<string, unknown>

const meta = {
  title: 'Feedback/Spinner',
  component: SpinnerComponent,
  tags: ['autodocs']
} satisfies Meta<typeof SpinnerComponent> & ArgTypeObject // TODO: Watch: https://github.com/storybookjs/storybook/issues/23352

export default meta

type Story = StoryObj<typeof meta>

const template: Story = {
  render: (args) => ({
    components: { Spinner: SpinnerComponent },
    setup() {
      return { args }
    },
    template: `<Spinner :size="args.size"/>`
  })
}

export const Default: Story = {
  ...template,
  args: {
    size: 'default'
  }
}

export const Small: Story = {
  ...template,
  args: {
    size: 'small'
  }
}

export const Large: Story = {
  ...template,
  args: {
    size: 'large'
  }
}
