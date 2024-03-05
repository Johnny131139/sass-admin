<script lang="ts" setup>
defineOptions({ name: 'ShopText' })
import { maps } from '../../index'
const Text = maps.get('Text')
</script>
<template>
  <Text v-bind="$attrs"> <slot></slot> </Text>
</template>

<style scoped></style>
