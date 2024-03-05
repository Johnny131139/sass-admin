<script lang="ts" setup>
import { CountTo } from '@shoptop/components'
</script>

<template>
  <ShopCard title="数字动画示例" :bordered="false">
    <ShopGrid :x-gap="12" :y-gap="8" :cols="2">
      <ShopGridItem>
        <ShopCard hoverable>
          <CountTo
            class="count-to-demo-card"
            prefix="$"
            :color="'#409EFF'"
            :startVal="1"
            :endVal="200000"
            :duration="8000"
          />
        </ShopCard>
      </ShopGridItem>
      <ShopGridItem>
        <ShopCard hoverable>
          <CountTo
            class="count-to-demo-card"
            suffix="$"
            :color="'red'"
            :startVal="1"
            :endVal="300000"
            :decimals="2"
            :duration="6000"
          />
        </ShopCard>
      </ShopGridItem>
      <ShopGridItem>
        <ShopCard hoverable>
          <CountTo
            class="count-to-demo-card"
            suffix="$"
            :color="'rgb(0,238,0)'"
            :startVal="1"
            :endVal="400000"
            :duration="7000"
          />
        </ShopCard>
      </ShopGridItem>
      <ShopGridItem>
        <ShopCard hoverable>
          <CountTo
            class="count-to-demo-card"
            separator="-"
            :color="'rgba(138,43,226,.6)'"
            :startVal="10000"
            :endVal="500000"
            :duration="8000"
          />
        </ShopCard>
      </ShopGridItem>
    </ShopGrid>
  </ShopCard>
</template>

<style lang="less" scoped>
.count-to-demo {
  &-card {
    font-size: 30px;
  }
}
</style>
