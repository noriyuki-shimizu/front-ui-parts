import type { ArgTypeObject, Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import InfiniteScrollList from './index.vue'
import type { Props } from './types'

const meta = {
  title: 'Data Display/InfiniteScrollList',
  // TODO: Watch: https://github.com/storybookjs/storybook/issues/24238
  component: InfiniteScrollList as Record<string, unknown>,
  tags: ['autodocs'],
  argTypes: {
    /* slots.emptyDescription */
    emptyDescription: {
      description: '空表示を表すカスタムテキスト',
      type: 'string',
      control: 'text',
      table: {
        defaultValue: {
          summary: 'No Data'
        }
      }
    },
    /* slots.record */
    record: {
      description: 'リスト内のレコード',
      control: 'object'
    }
  },
  args: {
    items: [{ id: '', text: '' }],
    height: '',
    onLoad(page) {
      return page === 0
    }
  }
} satisfies Meta<Props<{ id: string; text: string }[]>> & ArgTypeObject // TODO: Watch: https://github.com/storybookjs/storybook/issues/23352

export default meta

type Story = StoryObj<typeof meta>

const template: Story = {
  render: (args) => ({
    components: { InfiniteScrollList: InfiniteScrollList as Record<string, unknown> },
    setup() {
      const argValue = args as Partial<Props<{ id: string; text: string }[]>>
      const items = ref(argValue.items ?? [])

      const onLoad = async (page: number) => {
        if (items.value.length === 0) {
          return true
        }
        await new Promise((resolve) => {
          setTimeout(() => resolve(null), 2000)
        })
        const newItems = [...Array(10)].map((_, i) => ({
          id: `new-item-${page}-${i}`,
          text: `アイテム ${page * 10 + i}`
        }))
        items.value = [...items.value, ...newItems]
        return items.value.length >= 50
      }

      return { args: argValue, items, onLoad }
    },
    template: `
      <InfiniteScrollList :height="args.height" :items="items" :on-load="onLoad">
        <template #record="{ item }">
          <div style="margin-bottom: 8px;">{{ item.text }}</div>
        </template>
      </InfiniteScrollList>
    `
  })
}

export const Default: Story = {
  ...template,
  args: {
    items: [...Array(10)].map((_, i) => {
      return {
        id: `new-item-0-${i}`,
        text: `アイテム ${i}`
      }
    }),
    height: '300px'
  }
}

export const NoData: Story = {
  ...template,
  args: {
    items: [],
    height: '300px'
  }
}
