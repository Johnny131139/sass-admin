<script lang="ts" setup>
import BasicMenu from './components/BasicMenu.vue'
import { MenuModeEnum } from '@shoptop/constants'
import { useAppConfig } from '@shoptop/hooks'
import MixSubMenu from './components/MixSubMenu.vue'

const { isSidebar, isMix, menu } = useAppConfig()
</script>
<template>
  <VbenScrollbar>
    <BasicMenu
      v-if="isSidebar || (isMix && !menu.split)"
      :mode="MenuModeEnum.VERTICAL"
    />
    <MixSubMenu v-if="isMix && menu.split" />
  </VbenScrollbar>
</template>
