<script lang="ts" setup>
import { useI18n } from '@shoptop/locale'
import { useAppConfig } from '@shoptop/hooks'

const { t } = useI18n()

const { copyConfigs, resetAllConfig, clearAndRedo } = useAppConfig()
</script>
<template>
  <ShopSpace vertical>
    <ShopButton type="info" block @click="copyConfigs">
      <template #icon>
        <ShopIconify icon="ant-design:snippets-twotone" />
      </template>
      {{ t('layout.setting.copyBtn') }}
    </ShopButton>
    <ShopButton type="warning" @click="resetAllConfig" block>
      <template #icon>
        <ShopIconify icon="ant-design:reload-outlined" />
      </template>
      {{ t('common.resetText') }}
    </ShopButton>
    <ShopButton type="error" block @click="clearAndRedo">
      <template #icon>
        <ShopIconify icon="ant-design:redo-outlined" />
      </template>
      {{ t('layout.setting.clearBtn') }}
    </ShopButton>
  </ShopSpace>
</template>
