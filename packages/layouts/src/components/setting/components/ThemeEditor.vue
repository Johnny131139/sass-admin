<script lang="ts" setup>
import { APP_PRESET_COLOR_LIST, ThemeChangeEnum } from '@shoptop/constants'
import { useI18n } from '@shoptop/locale'
import { useAppTheme } from '@shoptop/hooks'
import ThemeColorPicker from './ThemeColorPicker.vue'
import SwitchItem from '#/components/setting/components/SwitchItem.vue'

const { t } = useI18n()

const {
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  errorColor,
  isSidebarDark,
  isHeaderDark,
  toggleSidebarTheme,
  toggleHeaderTheme,
} = useAppTheme()
</script>
<template>
  <ShopSpace vertical>
    <ShopSpace align="center">
      <ThemeColorPicker
        :title="t('layout.setting.primaryColor')"
        :def="primaryColor"
        :event="ThemeChangeEnum.THEME_PRIMARY_COLOR_CHANGE"
        :colorList="APP_PRESET_COLOR_LIST"
      />
      <ThemeColorPicker
        :title="t('layout.setting.infoColor')"
        :def="infoColor"
        :event="ThemeChangeEnum.THEME_INFO_COLOR_CHANGE"
      />
      <ThemeColorPicker
        :title="t('layout.setting.successColor')"
        :def="successColor"
        :event="ThemeChangeEnum.THEME_SUCCESS_COLOR_CHANGE"
      />
      <ThemeColorPicker
        :title="t('layout.setting.warningColor')"
        :def="warningColor"
        :event="ThemeChangeEnum.THEME_WARNING_COLOR_CHANGE"
      />
      <ThemeColorPicker
        :title="t('layout.setting.errorColor')"
        :def="errorColor"
        :event="ThemeChangeEnum.THEME_ERROR_COLOR_CHANGE"
      />
    </ShopSpace>
    <SwitchItem
      :title="t('layout.setting.sidebarDark')"
      :value="isSidebarDark"
      :callback="toggleSidebarTheme"
    />
    <SwitchItem
      :title="t('layout.setting.headerDark')"
      :value="isHeaderDark"
      :callback="toggleHeaderTheme"
    />
  </ShopSpace>
</template>
