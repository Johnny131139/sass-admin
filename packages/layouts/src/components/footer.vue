<script lang="ts">
export default { name: 'LayoutFooter' }
</script>
<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import { computed } from 'vue'
import { createNamespace } from '@shoptop/utils'
import { useSiteGeneral } from '@shoptop/hooks'

const { copyright, links } = useSiteGeneral()

const props = defineProps({
  height: {
    type: String,
    default: null,
  },
})
const { bem, cssVarBlock } = createNamespace('footer')
const style = computed(
  () =>
    (props.height
      ? cssVarBlock({ height: props.height })
      : {}) as CSSProperties,
)
</script>
<template>
  <footer :class="bem()" :style="style">
    <div class="flex items-center justify-center">
      <template v-for="(item, index) in links" :key="index">
        <ShopButton text tag="a" :href="item.url" target="_blank" class="mx-1">
          <span class="lh-32px flex items-center">
            <ShopIconify :icon="item.icon" size="18" />
            <ShopText depth="3">{{ item.label }}</ShopText>
          </span>
        </ShopButton>
      </template>
    </div>
    <ShopText depth="3">Copyright ©{{ copyright }}</ShopText>
  </footer>
</template>

<style lang="less" scoped>
.footer {
  --footer-padding: 0 20px;
  --footer-height: 60px;
  padding: var(--footer-padding);
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--footer-height);
  text-align: center;
}
</style>
