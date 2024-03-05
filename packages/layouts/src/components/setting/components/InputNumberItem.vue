<script lang="ts" setup>
defineOptions({ name: 'InputNumberItem' })
import { PropType } from 'vue'
import { HandlerSettingEnum } from '@shoptop/constants'
import { context } from '../../../../bridge'
const { useAppConfig } = context
const { baseHandler } = useAppConfig()

const props = defineProps({
  title: { type: String, default: '' },
  def: {
    type: [String, Number] as PropType<string | number>,
  },
  event: {
    type: Number as PropType<HandlerSettingEnum>,
    required: true,
  },
  disabled: {
    type: Boolean,
  },
  suffix: { type: String, default: '' },
})
const onChange = (value: any) => {
  baseHandler(props.event, value)
}
</script>
<template>
  <div class="switch-item">
    <ShopSpace justify="space-between" align="center">
      <span>{{ title }}</span>
      <ShopInputNumber
        class="w-130px"
        size="small"
        v-bind="$attrs"
        :value="def"
        :disabled="disabled"
        @update:value="onChange"
      >
        <template #suffix>
          {{ suffix }}
        </template>
      </ShopInputNumber>
    </ShopSpace>
  </div>
</template>
<style lang="less" scoped></style>
