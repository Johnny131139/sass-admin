<template>
  <ShopCard title="滚动组件函数示例" :bordered="false">
    <div class="my-4">
      <ShopButton @click="scrollTo(100)" class="mr-2">
        滚动到100px位置
      </ShopButton>
      <ShopButton @click="scrollTo(800)" class="mr-2">
        滚动到800px位置
      </ShopButton>
      <ShopButton @click="scrollTo(0)" class="mr-2"> 滚动到顶部 </ShopButton>
      <ShopButton @click="scrollBottom()" class="mr-2"> 滚动到底部 </ShopButton>
    </div>
    <div class="scroll-wrap">
      <Scrollbar ref="scrollRef">
        <template v-for="index in 100" :key="index">
          <div class="p-2" :style="{ border: '1px solid #eee' }">
            {{ index }}
          </div>
        </template>
      </Scrollbar>
    </div>
  </ShopCard>
</template>
<script lang="ts" setup>
import { ref, unref } from 'vue'
import { Scrollbar } from '@shoptop/components'

const scrollRef = ref<Nullable<T>>(null)
const getScroll = () => {
  const scroll = unref(scrollRef)
  if (!scroll) {
    throw new Error('scroll is Null')
  }
  return scroll
}

function scrollTo(top: number) {
  getScroll().scrollTo(top)
}
function scrollBottom() {
  getScroll().scrollBottom()
}
</script>
<style lang="less" scoped>
.scroll-wrap {
  width: 50%;
  height: 300px;
}
</style>
