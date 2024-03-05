<script lang="ts" setup>
import { reactive } from 'vue'
import { Time } from '@shoptop/components'

const now = new Date().getTime()
const state = reactive({
  time1: now - 60 * 3 * 1000,
  time2: now - 86400 * 3 * 1000,
})
</script>

<template>
  <ShopCard title="时间组件示例" :bordered="false">
    <ShopGrid :x-gap="12" :y-gap="8" :cols="1">
      <ShopGridItem>
        <ShopCard hoverable title="基础示例">
          <Time :value="state.time1" />
          <br />
          <Time :value="state.time2" />
        </ShopCard>
      </ShopGridItem>
      <ShopGridItem>
        <ShopCard hoverable title="定时更新">
          <Time :value="now" :step="1" />
          <br />
          <Time :value="now" :step="5" />
        </ShopCard>
      </ShopGridItem>
      <ShopGridItem>
        <ShopCard hoverable title="定时更新">
          <Time :value="now" mode="date" />
          <br />
          <Time :value="now" mode="datetime" />
          <br />
          <Time :value="now" />
        </ShopCard>
      </ShopGridItem>
    </ShopGrid>
  </ShopCard>
</template>

<style lang="less" scoped></style>
