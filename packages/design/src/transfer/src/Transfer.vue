<script lang="ts" setup>
defineOptions({ name: 'ShopTransfer' })
import { maps } from '../../index'

const Transfer = maps.get('Transfer')
</script>
<template>
  <Transfer v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot> </template
  ></Transfer>
</template>

<style scoped></style>
