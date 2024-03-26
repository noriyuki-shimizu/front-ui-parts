import type { ArgTypeObject, Meta, StoryObj } from '@storybook/vue3'
import ListRecord from './index.vue'

// TODO: Watch: https://github.com/storybookjs/storybook/issues/24238
const ListRecordComponent = ListRecord as Record<string, unknown>

const meta = {
  title: 'Data Display/ListRecord',
  component: ListRecordComponent,
  tags: ['autodocs'],
  argTypes: {
    /* slots.img */
    img: {
      description: 'レコードに表示する画像',
      control: { type: 'text' },
      table: {
        type: { summary: 'img' }
      }
    },
    /* slots.leftAside */
    leftAside: {
      description: '左アサイドへの表示項目',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      }
    },
    /* slots.header */
    header: {
      description: 'ヘッダー',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      }
    },
    /* slots.title */
    title: {
      description: 'タイトル',
      control: { type: 'text' },
      table: {
        defaultValue: {
          summary: 'タイトル'
        },
        type: { summary: 'string' }
      }
    },
    /* slots.description */
    description: {
      description: '説明',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      }
    },
    /* slots.footer */
    footer: {
      description: 'フッター',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof ListRecordComponent> & ArgTypeObject // TODO: Watch: https://github.com/storybookjs/storybook/issues/23352

export default meta

type Story = StoryObj<typeof meta>

export const SimpleRecord: Story = {
  render: (args) => ({
    components: { ListRecord: ListRecordComponent },
    setup() {
      return { args }
    },
    template: `
    <ListRecord>
      <template #header>ヘッダー</template>
      <template #title>タイトル</template>
      <template #description>ここに説明文を記述します。</template>
      <template #footer>フッター</template>
    </ListRecord>
    `
  })
}

export const LeftAsideRecord: Story = {
  render: (args) => ({
    components: { ListRecord: ListRecordComponent },
    setup() {
      return { args }
    },
    template: `
    <ListRecord>
      <template #leftAside>
        <span style="font-size: 40px;">😄</span>
      </template>
      <template #header>ヘッダー</template>
      <template #title>タイトル</template>
      <template #description>ここに説明文を記述します。</template>
      <template #footer>フッター</template>
    </ListRecord>
    `
  })
}

export const ImgRecord: Story = {
  render: (args) => ({
    components: { ListRecord: ListRecordComponent },
    setup() {
      return { args }
    },
    template: `
    <ListRecord>
      <template #img>
        <img
          src="https://github.com/noriyuki-shimizu/front-ui-parts/blob/main/src/assets/img/nature.jpg?raw=true"
          alt="nature"
          width="100%"
          height="100%"
        />
      </template>
      <template #header>ヘッダー</template>
      <template #title>タイトル</template>
      <template #description>ここに説明文を記述します。</template>
      <template #footer>フッター</template>
    </ListRecord>
    `
  })
}

export const LongTextRecord: Story = {
  render: (args) => ({
    components: { ListRecord: ListRecordComponent },
    setup() {
      return { args }
    },
    template: `
    <ListRecord>
      <template #header>
        長い文字列のヘッダー長い文字列のヘッダー長い文字列のヘッダー長い文字列のヘッダー長い文字列のヘッダー長い文字列のヘッダー長い文字列のヘッダー長い文字列のヘッダー長い文字列のヘッダー長い文字列のヘッダー
      </template>
      <template #title>
        長い文字列のタイトル長い文字列のタイトル長い文字列のタイトル長い文字列のタイトル長い文字列のタイトル長い文字列のタイトル長い文字列のタイトル長い文字列のタイトル長い文字列のタイトル長い文字列のタイトル
      </template>
      <template #description>
        長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文。長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文長い文字列の説明文。
      </template>
      <template #footer>
        長い文字列のフッター長い文字列のフッター長い文字列のフッター長い文字列のフッター長い文字列のフッター長い文字列のフッター長い文字列のフッター長い文字列のフッター長い文字列のフッター長い文字列のフッター
      </template>
    </ListRecord>
    `
  })
}
