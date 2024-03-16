import type { ArgTypeObject, Meta, StoryObj } from '@storybook/vue3'
import Empty from './index.vue'

const meta = {
  title: 'Data Display/Empty',
  // TODO: Watch: https://github.com/storybookjs/storybook/issues/24238
  component: Empty as Record<string, unknown>,
  tags: ['autodocs'],
  argTypes: {
    /* slots.image */
    image: {
      description: '空表示を表すカスタムイメージ',
      type: 'svg|img',
      control: false,
      table: {
        defaultValue: {
          summary: 'https://github.com/noriyuki-shimizu/front-ui-parts/blob/main/src/assets/svg/empty.svg'
        }
      }
    },
    /* slots.description */
    description: {
      description: 'Custom description',
      type: 'string',
      table: {
        defaultValue: { summary: 'No data' },
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof Empty> | ArgTypeObject // TODO: Watch: https://github.com/storybookjs/storybook/issues/23352

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {}

export const NoImage: Story = {
  args: {
    noImage: true
  }
}

export const CustomImage: Story = {
  render: (args) => ({
    components: { Empty: Empty as Record<string, unknown> },
    setup() {
      return args
    },
    template: `
      <Empty>
        <template #image>
          <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120px" height="120px" viewBox="0 0 462.035 462.035" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M457.83,158.441c-0.021-0.028-0.033-0.058-0.057-0.087l-50.184-62.48c-0.564-0.701-1.201-1.305-1.879-1.845 c-2.16-2.562-5.355-4.225-8.967-4.225H65.292c-3.615,0-6.804,1.661-8.965,4.225c-0.678,0.54-1.316,1.138-1.885,1.845l-50.178,62.48 c-0.023,0.029-0.034,0.059-0.057,0.087C1.655,160.602,0,163.787,0,167.39v193.07c0,6.5,5.27,11.771,11.77,11.771h438.496 c6.5,0,11.77-5.271,11.77-11.771V167.39C462.037,163.787,460.381,160.602,457.83,158.441z M408.516,134.615l16.873,21.005h-16.873 V134.615z M384.975,113.345v42.274H296.84c-2.514,0-4.955,0.805-6.979,2.293l-58.837,43.299l-58.849-43.305 c-2.023-1.482-4.466-2.287-6.978-2.287H77.061v-42.274H384.975z M53.523,155.62H36.65l16.873-21.005V155.62z M438.498,348.69H23.54 V179.16h137.796l62.711,46.148c4.15,3.046,9.805,3.052,13.954-0.005l62.698-46.144h137.799V348.69L438.498,348.69z"></path> </g> </g></svg>
        </template>
      </Empty>
    `
  }),
  args: {
    noImage: false
  }
}

export const CustomDescription: Story = {
  render: (args) => ({
    components: { Empty: Empty as Record<string, unknown> },
    setup() {
      return args
    },
    template: `
      <Empty>
        <template #description>データが存在しません</template>
      </Empty>
    `
  }),
  args: {
    noImage: false
  }
}
