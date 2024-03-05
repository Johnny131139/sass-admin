<script lang="ts" setup>
import { context } from '../../../../bridge'
import { useI18n } from '@shoptop/locale'

const { t } = useI18n()

const { useAppConfig } = context
const { copyConfigs, resetAllConfig, clearAndRedo } = useAppConfig()
</script>
<template>
  <ShopSpace vertical>
    <ShopButton block @click="copyConfigs">
      <template #icon>
        <ShopIconify icon="ant-design:snippets-twotone" />
      </template>
      {{ t('layout.setting.copyBtn') }}
    </ShopButton>
    <ShopButton @click="resetAllConfig" block>
      <template #icon>
        <ShopIconify icon="ant-design:reload-outlined" />
      </template>
      {{ t('common.resetText') }}
    </ShopButton>
    <ShopButton block @click="clearAndRedo">
      <template #icon>
        <ShopIconify icon="ant-design:redo-outlined" />
      </template>
      {{ t('layout.setting.clearBtn') }}
    </ShopButton>
  </ShopSpace>
</template>
