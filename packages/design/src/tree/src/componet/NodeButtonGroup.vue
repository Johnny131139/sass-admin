<script lang="ts">
export default {
  name: 'NodeButtonGroup',
}
</script>
<script lang="ts" setup>
const props = defineProps(['onDelete', 'onEdit', 'key'])
</script>
<template>
  <ShopSpace align="center"
    ><ShopIconify icon="ep:edit" @click="onEdit" />
    <ShopPopconfirm @PositiveClick="onDelete">
      <slot></slot>
      <template #trigger
        ><ShopIconify icon="ep:delete"></ShopIconify
      ></template> </ShopPopconfirm
  ></ShopSpace>
</template>
