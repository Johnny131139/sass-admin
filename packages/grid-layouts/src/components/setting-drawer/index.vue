<script lang="ts" setup>
import { useI18n } from '@shoptop/locale'
import { navigationBarTypeList } from '../constant'
import { HandlerSettingEnum, APP_PRESET_COLOR_LIST } from '@shoptop/constants'

import DarkModeToggle from './components/DarkModeToggle.vue'
import NavigationBarPicker from './components/NavigationBarPicker.vue'
import ThemeColorPicker from './components/ThemeColorPicker.vue'
import Transitions from './components/Transitions.vue'
import InterfaceFunction from './components/InterfaceFunction.vue'
import InterfaceDisplay from './components/InterfaceDisplay.vue'
import HandleButtons from './components/HandleButtons.vue'
import { useAppConfig } from '@shoptop/hooks'
const { baseHandler } = useAppConfig()

const { t } = useI18n()
const {
  openSettingDrawer,
  toggleOpenSettingDrawer,
  isHorizontal,
  navBarMode,
  themeColor,
  header,
  sidebar,
} = useAppConfig()
</script>

<template>
  <ShopDrawer
    :show="openSettingDrawer"
    @update:show="toggleOpenSettingDrawer"
    :width="330"
  >
    <ShopDrawerContent closable>
      <template #header>{{ t('layout.setting.drawerTitle') }}</template>

      <ShopDivider title-placement="left">
        {{ t('layout.setting.darkMode') }}
      </ShopDivider>
      <DarkModeToggle />
      <ShopDivider title-placement="left">
        {{ t('layout.setting.navMode') }}
      </ShopDivider>
      <NavigationBarPicker
        :def="navBarMode"
        :type-list="navigationBarTypeList"
        @handler="
          (item) => {
            baseHandler(HandlerSettingEnum.CHANGE_LAYOUT, {
              mode: item.mode,
              type: item.type,
              split: isHorizontal ? false : undefined,
            })
          }
        "
      />

      <template v-if="false">
        <ShopDivider title-placement="left">
          {{ t('layout.setting.sysTheme') }}
        </ShopDivider>
        <ThemeColorPicker
          :def="themeColor"
          :event="HandlerSettingEnum.CHANGE_THEME_COLOR"
          :color-list="APP_PRESET_COLOR_LIST"
        />
      </template>

      <ShopDivider title-placement="left">
        {{ t('layout.setting.headerTheme') }}
      </ShopDivider>
      <ShopDivider title-placement="left">{{
        t('layout.setting.sidebarTheme')
      }}</ShopDivider>

      <ShopDivider title-placement="left">
        {{ t('layout.setting.interfaceFunction') }}
      </ShopDivider>
      <InterfaceFunction />

      <ShopDivider title-placement="left">
        {{ t('layout.setting.interfaceDisplay') }}
      </ShopDivider>
      <InterfaceDisplay />

      <ShopDivider title-placement="left">
        {{ t('layout.setting.animation') }}
      </ShopDivider>
      <Transitions />
      <ShopDivider />

      <HandleButtons />
    </ShopDrawerContent>
  </ShopDrawer>
</template>
<style lang="scss" scoped></style>
