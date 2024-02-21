<script lang="ts" setup>
import { Layout } from '@shoptop/layouts'
import LayoutFeatures from './feature/index.vue'
</script>

<template>
  <LayoutFeatures />
  <layout>
    <template #main>
      <RouterView />
    </template>
  </layout>
</template>
