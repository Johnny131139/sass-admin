<script lang="ts" setup>
defineProps({
  icon: String,
})
</script>

<template>
  <span :class="$attrs.class">
    <ShopIconify :icon="icon" />
  </span>
</template>
