<script lang="ts" setup>
import { computed, nextTick, ref, unref } from 'vue'
import { useI18n } from '@shoptop/locale'
import { TabActionEnum } from '@shoptop/constants'
import { RouteLocationNormalized } from 'vue-router'
import { renderIcon } from '@shoptop/design'
import { useTabs } from '@shoptop/hooks'
import { useMultipleTab } from '@shoptop/stores'

const { refreshPage, close, closeAll, closeLeft, closeRight, closeOther } =
  useTabs()
const { t } = useI18n()

const x = ref(0)
const y = ref(0)
const targetTab = ref<RouteLocationNormalized>()
const showDropdown = ref(false)
const tabStore = useMultipleTab()
const options = computed(() => {
  const tab = targetTab.value
  if (!tab) return []
  return (
    tabStore
      .getTabActions(tab)
      //筛选非当前路由tab的重新加载按钮
      ?.filter((v) => !(v.key == 0 && v.disabled))
      //渲染多语言和图标
      .map((v) => {
        const label = v.label && t(v.label)
        const icon = v.icon && renderIcon(v.icon)
        return { ...v, label, icon }
      })
  )
})

const openDropdown = (e: PointerEvent, tabItem: RouteLocationNormalized) => {
  targetTab.value = tabItem
  showDropdown.value = false
  nextTick().then(() => {
    showDropdown.value = true
    x.value = e.clientX
    y.value = e.clientY
  })
}
const handleSelect = async (key) => {
  let tab = unref(targetTab)
  switch (key) {
    case TabActionEnum.REFRESH_PAGE:
      await refreshPage()
      break
    case TabActionEnum.CLOSE_CURRENT:
      await close(tab)
      break
    case TabActionEnum.CLOSE_ALL:
      await closeAll()
      break
    case TabActionEnum.CLOSE_LEFT:
      await closeLeft(tab)
      break
    case TabActionEnum.CLOSE_RIGHT:
      await closeRight(tab)
      break
    case TabActionEnum.CLOSE_OTHER:
      await closeOther(tab)
      break
  }
}
defineExpose({ openDropdown })
</script>
<template>
  <ShopDropdown
    placement="bottom-start"
    trigger="manual"
    :show-arrow="true"
    :x="x"
    :y="y"
    :options="options"
    v-model:show="showDropdown"
    @clickoutside="showDropdown = false"
    @select="handleSelect"
  />
</template>
