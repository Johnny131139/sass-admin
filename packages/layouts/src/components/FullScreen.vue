<script lang="ts" setup>
import { computed, unref } from 'vue'
import { useI18n } from '@shoptop/locale'

import { useFullscreen } from '@shoptop/utils'
const { t } = useI18n()
const { toggle, isFullscreen } = useFullscreen()

const getTitle = computed(() => {
  return unref(isFullscreen)
    ? t('layout.header.tooltipExitFull')
    : t('layout.header.tooltipEntryFull')
})
</script>

<template>
  <ShopPopover :title="getTitle" placement="bottom" :duration="500">
    <template #trigger>
      <span @click="toggle" class="flex items-center">
        <ShopIconify
          icon="ant-design:fullscreen-outlined"
          hoverPointer
          v-if="!isFullscreen"
        />
        <ShopIconify icon="ant-design:fullscreen-exit-outlined" v-else />
      </span>
    </template>
    <span>{{ getTitle }}</span>
  </ShopPopover>
</template>
