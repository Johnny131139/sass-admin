<script lang="ts" setup>
import { context } from '../../../bridge'
import { createNamespace } from '@shoptop/utils'

const { useMenuSetting } = context
const { toggleCollapsed, getCollapsed } = useMenuSetting()

const { bem } = createNamespace('side-trigger')
</script>
<template>
  <div :class="bem()" @click.stop="toggleCollapsed">
    <ShopIconify v-if="getCollapsed" icon="ph:caret-double-right-bold" />
    <ShopIconify v-else icon="ph:caret-double-left-bold" />
  </div>
</template>

<style lang="less" scoped>
.side-trigger {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
