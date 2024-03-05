<script lang="ts" setup>
import LayoutMenu from './components/menu/index.vue'
import LayoutHeader from './components/header.vue'
import LayoutTabs from './components/tabs/index.vue'
import LayoutMain from './components/main.vue'
import LayoutFooter from './components/footer.vue'
import { context } from '../bridge'
import { useComposables } from './useComposables'
import { computed, unref } from 'vue'
import { useAppTheme } from '@shoptop/hooks'

const { useMenuSetting, useRootSetting, useMultipleTabSetting } = context
const {
  toggleCollapsed,
  getCollapsed,
  getMenuWidth,
  getShowSidebar,
  getShowCenterTrigger,
} = useMenuSetting()
const { getShowFooter } = useRootSetting()
const { getShowMultipleTab } = useMultipleTabSetting()

const {
  headerRef,
  tabRef,
  footerRef,
  headerHeight,
  contentStyle,
  mainStyle,
  contentRef,
} = useComposables()

const menuHeight = computed(() => `calc(100vh - ${unref(headerHeight)}px)`)

const { isSidebarDark } = useAppTheme()
</script>
<template>
  <ShopLayout class="h-full">
    <ShopLayoutHeader ref="headerRef">
      <slot name="header">
        <LayoutHeader>
          <template #menu>
            <LayoutMenu mode="horizontal" />
          </template>
        </LayoutHeader>
      </slot>
    </ShopLayoutHeader>
    <ShopLayout has-sider :style="{ height: menuHeight }">
      <ShopLayoutSider
        v-if="getShowSidebar"
        :show-trigger="getShowCenterTrigger"
        bordered
        :collapsed-width="48"
        :width="getMenuWidth"
        collapse-mode="width"
        :collapsed="getCollapsed"
        @update:collapsed="toggleCollapsed"
        :inverted="!!isSidebarDark"
      >
        <slot name="sider">
          <LayoutMenu split />
        </slot>
      </ShopLayoutSider>

      <ShopLayout>
        <ShopLayoutHeader v-if="getShowMultipleTab">
          <slot name="tabs"><LayoutTabs ref="tabRef" /></slot>
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
  </ShopLayout>
</template>
