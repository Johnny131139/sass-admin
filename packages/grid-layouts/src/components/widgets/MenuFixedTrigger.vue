<script lang="ts" setup>
import TopButtonWrapper from '../comm/TopButtonWrapper.vue'
import { useAppConfig } from '@shoptop/hooks'

const { menu, toggleMenuFixed } = useAppConfig()
</script>
<template>
  <TopButtonWrapper @click.stop="toggleMenuFixed">
    <ShopIconify
      size="22"
      :icon="menu.mixSideFixed ? 'ri:pushpin-2-fill' : 'ri:pushpin-2-line'"
    />
  </TopButtonWrapper>
</template>
