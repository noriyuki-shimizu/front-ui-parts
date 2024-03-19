/** Props */
export interface Props {
  /** カラー */
  color?: 'normal' | 'processing' | 'success' | 'error' | 'warning'
  /** 枠線 */
  bordered?: boolean
  /** ホバーした際に背景色を変更するか */
  hovered?: boolean
}
