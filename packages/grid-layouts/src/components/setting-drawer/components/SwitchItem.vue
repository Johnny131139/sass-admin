<script lang="ts" setup>
defineOptions({ name: 'SwitchItem' })
import { PropType } from 'vue'
import { HandlerSettingEnum } from '@shoptop/constants'
import { useAppConfig } from '@shoptop/hooks'

const props = defineProps({
  title: { type: String, default: '' },
  def: {
    type: Boolean as PropType<boolean>,
  },
  event: {
    type: Number as PropType<HandlerSettingEnum>,
  },
  disabled: {
    type: Boolean,
  },
})

const { baseHandler } = useAppConfig()
const onChange = (value) => {
  baseHandler(props.event, value)
}
</script>
<template>
  <ShopSpace justify="space-between" align="center">
    <span>{{ title }}</span>
    <ShopSwitch :value="def" :disabled="disabled" @update:value="onChange">
      <template #checked-icon>
        <ShopIconify icon="ant-design:check-outlined" color="#18A058" />
      </template>
      <template #unchecked-icon>
        <ShopIconify icon="ant-design:close-outlined" color="#BEBEBE" />
      </template>
    </ShopSwitch>
  </ShopSpace>
</template>
