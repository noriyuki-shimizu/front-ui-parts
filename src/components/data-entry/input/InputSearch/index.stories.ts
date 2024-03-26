import type { ArgTypeObject, Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import InputSearch from './index.vue'

// TODO: Watch: https://github.com/storybookjs/storybook/issues/24238
const InputSearchComponent = InputSearch as Record<string, unknown>

const meta = {
  title: 'Data Entry/InputSearch',
  component: InputSearchComponent,
  tags: ['autodocs']
} satisfies Meta<typeof InputSearchComponent> & ArgTypeObject // TODO: Watch: https://github.com/storybookjs/storybook/issues/23352

export default meta

type Story = StoryObj<typeof meta>

const template: Story = {
  render: (args) => ({
    components: { InputSearch: InputSearchComponent },
    setup() {
      const inputText = ref<string>('')
      return { args, inputText }
    },
    template: `
      <InputSearch
        v-model="inputText"
        :placeholder="args.placeholder"
        :size="args.size"
      />
    `
  })
}

export const Default: Story = {
  ...template,
  args: {
    placeholder: 'タイトル検索',
    size: 'medium'
  }
}

export const Small: Story = {
  ...template,
  args: {
    placeholder: 'タイトル検索',
    size: 'small'
  }
}

export const Large: Story = {
  ...template,
  args: {
    placeholder: 'タイトル検索',
    size: 'large'
  }
}
