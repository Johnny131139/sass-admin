<script lang="ts" setup>
defineOptions({ name: 'ShopRadioGroup' })
import { maps } from '../../index'
import { fetchProps, fetch } from '../../fetch'
import { ref, watch, watchEffect } from 'vue'
const RadioGroup = maps.get('RadioGroup')
const props = defineProps({
  ...fetchProps,
})
const options = ref([])
const isFirstLoad = ref(true)
watchEffect(() => {
  props.immediate && fetch(props, options)
})
watch(
  () => props.params,
  () => {
    !isFirstLoad.value && fetch(props, options)
  },
  { deep: true },
)
</script>
<template>
  <!--  {{ $attrs }}-->
  <RadioGroup v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template v-for="item in options" :key="`${item.value}`">
      <ShopRadioButton
        v-if="$attrs.type === 'button'"
        v-model:value="item.value"
        v-bind="item"
        >{{ item.label }}</ShopRadioButton
      >
      <ShopRadio v-else v-model:value="item.value" v-bind="item">{{
        item.label
      }}</ShopRadio>
    </template>
  </RadioGroup>
</template>

<style scoped></style>
