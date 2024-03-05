import ShopIconify from './src/Iconify.vue'
import { h } from 'vue'

const renderIcon = (icon: string) => {
  if (!icon) return undefined
  return () => h(ShopIconify, { icon })
}
export { ShopIconify, renderIcon }
