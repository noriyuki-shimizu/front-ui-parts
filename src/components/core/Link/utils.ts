import type { AnchorHTMLAttributes } from 'vue'
import { LangUtil } from '@/utils/core'

/**
 * 関数 `createRel` は、提供された属性に基づいてアンカー要素の `rel` 属性の値を決定します。
 * @param {AnchorHTMLAttributes} value - `createRel` 関数は、タイプ `AnchorHTMLAttributes` のオブジェクト `value`
 * をパラメータとして受け取ります。通常、このオブジェクトには、`target`、`media`、`hreflang`、`type`
 * などのプロパティが含まれます。関数はこれらのプロパティの値をチェックし、` に対応する値を返します。
 * @returns 関数 `createRel` は、コードで指定された条件に基づいて `AnchorHTMLAttributes['rel']`
 * の値を返します。条件が満たされる場合、「noreferrer noopener」、「alternate」、または「value.target」の値のいずれかを返します。
 */
const createRel = (value: AnchorHTMLAttributes): AnchorHTMLAttributes['rel'] => {
  if (LangUtil.isUndefined(value.target)) {
    return undefined
  }
  if (value.target === '_blank') {
    return 'noreferrer noopener'
  }
  if (LangUtil.isUndefined(value.media) || LangUtil.isUndefined(value.hreflang) || LangUtil.isUndefined(value.type)) {
    return 'alternate'
  }
  return value.target
}

/**
 * 関数 `createAnchorHTMLAttributes` は、入力値に基づいてアンカー HTML 属性を持つオブジェクトを作成して返します。
 * @param {AnchorHTMLAttributes} [value] - `createAnchorHTMLAttributes` 関数は、タイプ `AnchorHTMLAttributes`
 * のオプションのパラメーター `value` を受け取ります。このパラメータは、HTML のアンカー要素の特定の属性を持つ新しいオブジェクトを作成するために使用されます。 `value` パラメータが
 * `未定義` の場合、空のオブジェクトが返されます。それ以外の場合は、
 * @returns 関数 `createAnchorHTMLAttributes` は、タイプ `AnchorHTMLAttributes` の入力 `value`
 * に基づくプロパティを持つオブジェクトを返します。
 * 「値」が未定義の場合は、空のオブジェクトが返されます。それ以外の場合、返されるオブジェクトには、`download`、`href`、`hreflang`、`ping`、`referrerpolicy`、`rel`、`type`、`target`、および
 */
export const createAnchorHTMLAttributes = (value?: AnchorHTMLAttributes): AnchorHTMLAttributes => {
  if (LangUtil.isUndefined(value)) {
    return {}
  }

  return {
    download: value.download,
    href: value.href,
    hreflang: value.hreflang,
    ping: value.ping,
    referrerpolicy: value.referrerpolicy,
    rel: createRel(value),
    type: value.type,
    target: value.target || '_self',
    media: value.media
  }
}
