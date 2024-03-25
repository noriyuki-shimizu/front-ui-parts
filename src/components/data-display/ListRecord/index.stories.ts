import type { ArgTypeObject, Meta, StoryObj } from '@storybook/vue3'
import ListRecord from './index.vue'

const meta = {
  title: 'Data Display/ListRecord',
  // TODO: Watch: https://github.com/storybookjs/storybook/issues/24238
  component: ListRecord as unknown as Record<string, unknown>,
  tags: ['autodocs'],
  argTypes: {
    /* slots.img */
    img: {
      description: '画像',
      type: 'img',
      control: 'object'
    },
    /* slots.leftAside */
    leftAside: {
      description: '左アサイドへの表示項目',
      type: 'string',
      control: 'text'
    },
    /* slots.header */
    header: {
      description: 'ヘッダー',
      type: 'string',
      control: 'text'
    },
    /* slots.title */
    title: {
      description: 'タイトル',
      type: 'string',
      control: 'text',
      table: {
        defaultValue: {
          summary: 'タイトル'
        }
      }
    },
    /* slots.description */
    description: {
      description: '説明',
      type: 'string',
      control: 'text'
    },
    /* slots.footer */
    footer: {
      description: 'フッター',
      type: 'string',
      control: 'text'
    }
  }
} satisfies Meta<typeof ListRecord> & ArgTypeObject // TODO: Watch: https://github.com/storybookjs/storybook/issues/23352

export default meta

type Story = StoryObj<typeof meta>

export const SimpleRecord: Story = {
  render: (args) => ({
    components: { ListRecord: ListRecord as unknown as Record<string, unknown> },
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
    components: { ListRecord: ListRecord as unknown as Record<string, unknown> },
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
    components: { ListRecord: ListRecord as unknown as Record<string, unknown> },
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
    components: { ListRecord: ListRecord as unknown as Record<string, unknown> },
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
