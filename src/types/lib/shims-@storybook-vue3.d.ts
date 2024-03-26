declare module '@storybook/vue3' {
  import type { Conditional, SBScalarType, SBType } from '@storybook/vue3'

  /** @see {@link https://storybook.js.org/docs/api/arg-types#controltype} */
  type ControlType =
    /* array or object */
    | 'object'
    /* boolean */
    | 'boolean'
    /* enum */
    | 'check'
    | 'inline-check'
    | 'radio'
    | 'inline-radio'
    | 'select'
    | 'multi-select'
    /* number */
    | 'number'
    | 'range'
    /* object */
    | 'file'
    /* string */
    | 'color'
    | 'date'
    | 'text'
    | null

  /** @see {@link https://storybook.js.org/docs/api/arg-types#argtypes} */
  interface ArgTypeObject {
    argTypes?: {
      [key: string]: {
        control?: ControlType | {
          type: ControlType
          accept?: string
          labels?: { [option: string]: string }
          max?: number
          min?: number
          presetColors?: string[]
          step?: number
        } | false
        description?: string
        if?: Conditional
        mapping?: { [key: string]: { [option: string]: string } }
        name?: string
        options?: string[]
        table?: {
          category?: string
          defaultValue?: { summary: string; detail?: string }
          disable?: boolean
          subcategory?: string
          type?: { summary?: string; detail?: string }
        }
        type?: SBType | SBScalarType['name']
      }
    }
  }
}

export {}
