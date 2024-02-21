<script lang="ts" setup>
import { computed, defineComponent, nextTick, unref, useAttrs } from 'vue'
import { NavBarModeEnum } from '@shoptop/constants'
import { createThemeColorListen } from '@shoptop/hooks'

import LeftMenuLayout from './left-menu.vue'
// import TopMenuLayout from './top-menu.vue'
// import TopMenuMixLayout from './top-menu-mixed.vue'
// import MixSidebar from './mix-sidebar.vue'
// import Mobile from './mobile-menu.vue'
import { context } from '../bridge'
import { useRoute } from 'vue-router'

const { useMenuSetting, useAppInject } = context

const { getMenuType } = useMenuSetting()
const layout = LeftMenuLayout

nextTick(() => {
  createThemeColorListen()
})

</script>
<template>
  <component :is="layout">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </component>
</template>
