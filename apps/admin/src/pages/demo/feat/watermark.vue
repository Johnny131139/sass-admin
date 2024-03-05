<script lang="ts" setup>
import { ref, onUnmounted, nextTick } from 'vue'
import type { Ref } from 'vue'
import { useWatermark } from '@/hooks/web/useWatermark'

const { setWatermark, clear, clearAll } = useWatermark()
const { setWatermark: setWatermark2 } = useWatermark()

onUnmounted(() => {
  clearAll()
})
const show = ref(false)

const content = '我的水印'
const createWatermark = (cardEl) => {
  useWatermark(cardEl as Ref<HTMLElement | null>).setWatermark(content)
}
nextTick(() => {
  createWatermark(document.getElementById('cardId'))
})
</script>

<template>
  <ShopCard title="水印示例">
    <ShopWatermark
      v-if="show"
      content="大家艰苦一下，一切都会有的"
      cross
      fullscreen
      :font-size="16"
      :line-height="16"
      :width="384"
      :height="384"
      :x-offset="12"
      :y-offset="60"
      :rotate="-15"
    />
    <ShopGrid x-gap="12" :cols="2">
      <ShopGridItem>
        <ShopCard title="组件方式" style="height: 100%">
          <div class="mb-4">基于Naive UI的水印Watermark组件</div>
          <div>
            <ShopCard title="全屏水印">
              <ShopSwitch v-model:value="show" />
            </ShopCard>
            <ShopCard title="部分水印">
              <ShopWatermark
                content="核心机密"
                cross
                selectable
                :font-size="16"
                :line-height="16"
                :width="192"
                :height="128"
                :x-offset="12"
                :y-offset="28"
                :rotate="-15"
              >
                <ShopCard title="带封面的卡片" hoverable>
                  <template #cover>
                    <img src="@/assets/images/cover.png" alt="cover.png" />
                  </template>
                  样式丰富了许多,不是吗🥳
                </ShopCard>
              </ShopWatermark>
            </ShopCard>
          </div>
        </ShopCard>
      </ShopGridItem>
      <ShopGridItem>
        <ShopCard title="函数方式" style="height: 100%">
          <div class="mb-4">基于自定义hooks实现(支持防篡改)</div>
          <div>
            <ShopButton
              type="primary"
              class="mr-2"
              @click="setWatermark('WaterMark Info1')"
            >
              Create Watermark1
            </ShopButton>
            <ShopButton
              type="primary"
              class="mr-2"
              @click="setWatermark2('WaterMark Info2')"
            >
              Create Watermark2
            </ShopButton>
            <ShopButton type="error" class="mr-2" @click="clear">
              Clear Watermark1
            </ShopButton>
            <ShopButton type="error" class="mr-2" @click="clearAll">
              ClearAll
            </ShopButton>
            <ShopButton
              type="warning"
              class="mr-2"
              @click="setWatermark('WaterMark Info New')"
            >
              Update Watermark1
            </ShopButton>
            <ShopCard title="部分水印">
              <ShopCard id="cardId" title="带封面的卡片" hoverable>
                <template #cover>
                  <img src="@/assets/images/cover.png" alt="cover.png" />
                </template>
                样式丰富了许多,不是吗🥳
              </ShopCard>
            </ShopCard>
          </div>
        </ShopCard>
      </ShopGridItem>
    </ShopGrid>
  </ShopCard>
</template>
