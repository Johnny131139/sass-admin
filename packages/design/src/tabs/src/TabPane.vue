<script lang="ts" setup>
defineOptions({ name: 'ShopTabPane' })
import { maps } from '../../index'
const TabPane = maps.get('TabPane')
</script>
<template>
  <TabPane v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot> </template
  ></TabPane>
</template>

<style scoped></style>
