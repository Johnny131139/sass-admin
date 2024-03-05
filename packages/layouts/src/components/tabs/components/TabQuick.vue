<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from '@shoptop/locale'
import { ShopIconify, renderIcon } from '@shoptop/design'
import { TabActionEnum } from '@shoptop/constants'
import { RouteLocationNormalized } from 'vue-router'

import { useMultipleTab } from '@shoptop/stores'
import { useTabs } from '@shoptop/hooks'
const { refreshPage, close, closeAll, closeLeft, closeRight, closeOther } =
  useTabs()

const { t } = useI18n()
const tabStore = useMultipleTab()

const props = defineProps({
  tabItem: {
    type: Object as PropType<RouteLocationNormalized>,
    default: null,
  },
})

const options = computed(
  () =>
    tabStore.getTabActions(props.tabItem)?.map((v) => {
      v.label = t(v.label)
      v.icon = renderIcon(v.icon)
      return v
    }),
)
const handleSelect = async (key) => {
  switch (key) {
    case TabActionEnum.REFRESH_PAGE:
      await refreshPage()
      break
    case TabActionEnum.CLOSE_CURRENT:
      await close(props.tabItem)
      break
    case TabActionEnum.CLOSE_ALL:
      await closeAll()
      break
    case TabActionEnum.CLOSE_LEFT:
      await closeLeft()
      break
    case TabActionEnum.CLOSE_RIGHT:
      await closeRight()
      break
    case TabActionEnum.CLOSE_OTHER:
      await closeOther()
      break
  }
}
</script>
<template>
  <ShopDropdown
    placement="bottom-start"
    trigger="click"
    :options="options"
    :show-arrow="true"
    @select="handleSelect"
  >
    <div
      class="h-full w-32px border-l flex-center border-[var(--n-border-color)] cursor-pointer"
    >
      <ShopIconify
        icon="material-symbols:double-arrow-rounded"
        class="rotate-90"
        rotate="90deg"
      />
    </div>
  </ShopDropdown>
</template>
