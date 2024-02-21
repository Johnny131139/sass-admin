<script lang="ts" setup>
import TopButtonWrapper from '../comm/TopButtonWrapper.vue'
import { useFullscreen } from '@shoptop/utils'
import { computed, unref } from 'vue'
import { useI18n } from '@shoptop/locale'

const { t } = useI18n()

/**
 * F11 event cannot be listened to
 */
const { isFullscreen, toggle } = useFullscreen()

const getTitle = computed(() => {
  return unref(isFullscreen)
    ? t('layout.header.tooltipExitFull')
    : t('layout.header.tooltipEntryFull')
})
</script>
<template>
  <VbenPopover :title="getTitle" placement="bottom" :duration="500">
    <template #trigger>
      <TopButtonWrapper @click.stop="toggle">
        <VbenIconify
          :icon="
            isFullscreen
              ? 'mingcute:fullscreen-exit-line'
              : 'mingcute:fullscreen-line'
          "
        />
      </TopButtonWrapper>
    </template>
    <span>{{ getTitle }}</span>
  </VbenPopover>
</template>
