import { h, VNode } from 'vue'
import { VbenIconify } from '@shoptop/design'

export function renderIcon(icon: string): () => VNode | undefined {
  if (!icon) return () => undefined
  return () => h(VbenIconify, { icon })
}
