<script lang="ts" setup>
defineOptions({ name: 'ShopIconWrapper' })
import { maps } from '../../index'
const Icon = maps.get('IconWrapper')
</script>
<template>
  <Icon v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot> </template
  ></Icon>
</template>

<style scoped></style>
