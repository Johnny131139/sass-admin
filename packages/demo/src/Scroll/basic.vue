<script lang="ts" setup></script>

<template>
  <ShopCard title="滚动组件示例" :bordered="false">
    <div class="scroll-wrap">
      <ShopScrollbar>
        <template v-for="index in 100" :key="index">
          <div class="p-2" :style="{ border: '1px solid #eee' }">
            {{ index }}
          </div>
        </template>
      </ShopScrollbar>
    </div>
  </ShopCard>
</template>

<style lang="less" scoped>
.scroll-wrap {
  width: 50%;
  height: 300px;
}
</style>
