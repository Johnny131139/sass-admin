<script lang="ts" setup>
defineOptions({ name: 'ShopSpace' })
import { maps } from '../../index'
const Space = maps.get('Space')
</script>
<template>
  <Space v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot> </template
  ></Space>
</template>

<style scoped></style>
