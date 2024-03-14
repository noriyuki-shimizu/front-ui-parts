import type { AnchorHTMLAttributes } from 'vue'

/** レコード全体をリンクで囲う際のリンクデータ */
export interface LinkBridge extends AnchorHTMLAttributes {
  ariaLabel?: string
}

/** Props */
export interface Props {
  /** レコード全体をリンクで囲う際のリンクデータ */
  linkBridge?: LinkBridge
}
