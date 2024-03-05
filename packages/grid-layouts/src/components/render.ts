import { h, VNode } from 'vue'
import { ShopIconify } from '@shoptop/design'

export function renderIcon(icon: string): () => VNode | undefined {
  if (!icon) return () => undefined
  return () => h(ShopIconify, { icon })
}
