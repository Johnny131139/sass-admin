<script lang="ts" setup>
import TopButtonWrapper from '../comm/TopButtonWrapper.vue'
import { computed, unref } from 'vue'
import { SettingButtonPositionEnum } from '@shoptop/constants'
import { useAppConfig } from '@shoptop/hooks'

const { toggleOpenSettingDrawer, header, settingButtonPosition } =
  useAppConfig()

const getShowSetting = computed(() => {
  if (!unref(header).showSetting) {
    return false
  }
  if (unref(settingButtonPosition) === SettingButtonPositionEnum.AUTO) {
    return unref(header).show
  }
  return unref(settingButtonPosition) === SettingButtonPositionEnum.HEADER
})
</script>
<template>
  <TopButtonWrapper v-if="getShowSetting" @click.stop="toggleOpenSettingDrawer">
    <ShopIconify icon="fluent:settings-48-regular" />
  </TopButtonWrapper>
</template>
