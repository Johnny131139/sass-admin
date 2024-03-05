<script lang="ts" setup>
defineOptions({ name: 'SwitchItem' })
import { PropType } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  value: {
    type: Boolean as PropType<boolean>,
  },
  callback: {
    type: Function as PropType<(val: boolean) => void>,
    required: true,
  },
  disabled: {
    type: Boolean,
  },
})
const onChange = (value: boolean) => {
  props.callback(value)
}
</script>
<template>
  <div class="switch-item">
    <ShopSpace justify="space-between" align="center">
      <span>{{ title }}</span>
      <ShopSwitch
        :value="props.value"
        :disabled="disabled"
        @update:value="onChange"
      >
        <template #checked-icon>
          <ShopIconify icon="ant-design:check-outlined" color="#18A058" />
        </template>
        <template #unchecked-icon>
          <ShopIconify icon="ant-design:close-outlined" color="#BEBEBE" />
        </template>
      </ShopSwitch>
    </ShopSpace>
  </div>
</template>
