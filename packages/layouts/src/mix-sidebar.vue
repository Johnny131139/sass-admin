<script lang="ts" setup>
import { useComposables } from './useComposables'
import LayoutMixMenu from './components/mixSideBar/Menu.vue'
import LayoutHeader from './components/header.vue'
import LayoutMain from './components/main.vue'
import LayoutFooter from './components/footer.vue'
import { context } from '../bridge'
import { computed, unref } from 'vue'
import {
  SIDE_BAR_MINI_WIDTH,
  SIDE_BAR_SHOW_TIT_MINI_WIDTH,
} from '@shoptop/constants'
import { createNamespace } from '@shoptop/utils'
import { useAppTheme } from '@shoptop/hooks'

const { useMenuSetting, useRootSetting } = context
const { headerRef, contentStyle, mainStyle, footerRef, contentRef } =
  useComposables()

const { getCollapsed, getMenuWidth, getIsFixed, getShowSidebar } =
  useMenuSetting()
const { getShowFooter } = useRootSetting()

const getMixSidebarWidth = computed(() => {
  return unref(getCollapsed)
    ? SIDE_BAR_MINI_WIDTH
    : SIDE_BAR_SHOW_TIT_MINI_WIDTH
})
const getContainerStyle = computed(() => {
  return {
    paddingLeft: (unref(getIsFixed) ? unref(getMenuWidth) : 0) + 'px',
  }
})

const { bem } = createNamespace('layout-mix-sidebar')

const { isSidebarDark } = useAppTheme()
</script>
<template>
  <ShopLayout has-sider class="h-full">
    <ShopLayoutSider
      v-if="getShowSidebar"
      bordered
      :collapsed-width="getMixSidebarWidth"
      collapse-mode="width"
      :collapsed="true"
      :class="bem()"
      :inverted="!!isSidebarDark"
    >
      <slot name="sider">
        <LayoutMixMenu :mix-sidebar-width="getMixSidebarWidth" />
      </slot>
    </ShopLayoutSider>
    <ShopLayout :style="getContainerStyle" class="transition-all">
      <ShopLayoutHeader ref="headerRef">
        <slot name="header"><LayoutHeader /></slot>
      </ShopLayoutHeader>
      <ShopLayout :content-style="contentStyle">
        <ShopLayoutContent :content-style="mainStyle" ref="contentRef">
          <LayoutMain>
            <slot name="main"></slot>
          </LayoutMain>
        </ShopLayoutContent>
        <ShopLayoutFooter v-if="getShowFooter" ref="footerRef">
          <slot name="footer">
            <LayoutFooter />
          </slot>
        </ShopLayoutFooter>
      </ShopLayout>
    </ShopLayout>
  </ShopLayout>
</template>
<style lang="less" scoped>
.layout-mix-sidebar {
  z-index: var(--mix-sider-z-index);
}
</style>
