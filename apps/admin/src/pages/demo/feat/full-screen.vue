<script lang="ts" setup>
import { ref } from 'vue'
import { useFullscreen } from '@shoptop/utils'

const domRef = ref<Nullable<HTMLElement>>(null)

const { enter, toggle, exit, isFullscreen } = useFullscreen()

const { toggle: toggleDom, isFullscreen: isDomFullscreen } =
  useFullscreen(domRef)
</script>
<template>
  <ShopCard title="全屏示例">
    <ShopCard title="Window Full Screen">
      <ShopButton
        type="primary"
        :disabled="isFullscreen"
        @click="enter"
        class="mr-2"
      >
        Enter Window Full Screen
      </ShopButton>
      <ShopButton type="success" @click="toggle" class="mr-2">
        Toggle Window Full Screen
      </ShopButton>

      <ShopButton type="error" @click="exit" class="mr-2">
        Exit Window Full Screen
      </ShopButton>

      Current State: {{ isFullscreen }}
    </ShopCard>

    <ShopCard title="Dom Full Screen">
      <ShopButton type="primary" @click="toggleDom" class="mr-2">
        Enter Dom Full Screen
      </ShopButton>
    </ShopCard>

    <div
      ref="domRef"
      class="flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"
    >
      <ShopButton type="primary" @click="toggleDom" class="mr-2">
        {{ isDomFullscreen ? 'Exit Dom Full Screen' : 'Enter Dom Full Screen' }}
      </ShopButton>
    </div>
  </ShopCard>
</template>
