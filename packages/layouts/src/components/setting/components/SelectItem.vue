<script lang="ts" setup>
defineOptions({ name: 'SelectItem' })
import { PropType, h } from 'vue'
import { HandlerSettingEnum } from '@shoptop/constants'
import { useI18n } from '@shoptop/locale'
import { context } from '../../../../bridge'
const { useAppConfig } = context
const { baseHandler } = useAppConfig()

const { t } = useI18n()

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
  options: { type: Array, default: () => [] },
})
const onChange = (value: any) => {
  baseHandler(props.event, value)
}
/*
 * options 数据传入时,多语言会失效,这里再渲染一遍
 * */
function renderLabel(option: { label: string; value: string | number }) {
  return h('span', {}, t(option.label))
}
</script>
<template>
  <div class="switch-item">
    <ShopSpace justify="space-between" align="center">
      <span>{{ title }}</span>
      <ShopSelect
        class="w-130px"
        size="small"
        :value="def"
        :options="options"
        :disabled="disabled"
        @update:value="onChange"
        :render-label="renderLabel"
      />
    </ShopSpace>
  </div>
</template>
<style lang="less" scoped></style>
