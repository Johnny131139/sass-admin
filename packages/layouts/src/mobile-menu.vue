<script lang="ts" setup>
import LayoutMenu from './components/menu/index.vue'
import LayoutHeader from './components/header.vue'
import LayoutMain from './components/main.vue'
import LayoutFooter from './components/footer.vue'
import { context } from '../bridge'
import { onMounted, ref, unref } from 'vue'
import { useComposables } from './useComposables'

const { useMenuSetting, Logo, useRootSetting } = context

const { getMenuWidth } = useMenuSetting()
const { getShowFooter } = useRootSetting()

const { headerRef, footerRef, contentStyle, mainStyle, contentRef } =
  useComposables()

const active = ref(false)
onMounted(() => {
  active.value = true
})
const activeTrigger = () => {
  active.value = !unref(active)
}
</script>
<template>
  <ShopLayout class="h-full min-w-375px">
    <ShopDrawer v-model:show="active" placement="left" :width="getMenuWidth">
      <ShopDrawerContent :body-content-style="{ padding: 0 }">
        <LayoutMenu />
      </ShopDrawerContent>
    </ShopDrawer>
    <ShopLayoutHeader ref="headerRef">
      <slot name="header">
        <LayoutHeader>
          <template #logo>
            <ShopSpace align="center" :wrap-item="false">
              <Logo :show-title="false" />
              <ShopIconify
                @click="activeTrigger"
                :icon="
                  active
                    ? 'menu-fold-outlined'
                    : 'ant-design:menu-unfold-outlined'
                "
                size="24"
                hoverPointer
              />
            </ShopSpace>
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

<style scoped></style>
