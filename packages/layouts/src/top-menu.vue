<script lang="ts" setup>
import LayoutHeader from './components/header.vue'
import LayoutMenu from './components/menu/index.vue'
import LayoutMain from './components/main.vue'
import LayoutFooter from './components/footer.vue'
import { useComposables } from './useComposables'
import { context } from '../bridge'

const { headerRef, footerRef, contentStyle, mainStyle, contentRef } =
  useComposables()
const { useRootSetting } = context
const { getShowFooter } = useRootSetting()
</script>
<template>
  <ShopLayout class="h-full">
    <ShopLayoutHeader ref="headerRef">
      <slot name="header">
        <LayoutHeader ref="headerRef">
          <template #menu>
            <LayoutMenu mode="horizontal" />
          </template>
        </LayoutHeader>
      </slot>
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
</template>
