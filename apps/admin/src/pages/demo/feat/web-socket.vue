<template>
  <ShopCard title="WebSocket 示例">
    <div class="flex">
      <div class="w-1/3 bg-white p-4">
        <div class="flex items-center">
          <span class="text-lg font-medium mr-4"> 连接状态: </span>
          <ShopTag :type="getTagType">{{ status }}</ShopTag>
        </div>
        <hr class="my-4" />

        <div class="flex">
          <ShopInputGroup>
            <ShopInputGroupLabel>服务地址</ShopInputGroupLabel>
            <ShopInput v-model:value="state.server" disabled />
          </ShopInputGroup>
          <ShopButton :type="getIsOpen ? 'error' : 'primary'" @click="toggle">
            {{ getIsOpen ? '关闭连接' : '开启连接' }}
          </ShopButton>
        </div>
        <p class="text-lg font-medium mt-4">设置</p>
        <hr class="my-4" />

        <ShopInput
          type="textarea"
          placeholder="需要发送到服务器的内容"
          :disabled="!getIsOpen"
          v-model:value="state.sendValue"
          clearable
        />

        <ShopButton
          type="primary"
          block
          class="mt-4"
          :disabled="!getIsOpen"
          @click="handlerSend"
        >
          发送
        </ShopButton>
      </div>

      <div class="w-2/3 bg-white ml-4 p-4">
        <span class="text-lg font-medium mr-4"> 消息记录: </span>
        <hr class="my-4" />

        <div class="max-h-80 overflow-auto">
          <ul>
            <li v-for="item in getList" class="mt-2" :key="item.time">
              <div class="flex items-center">
                <span class="mr-2 text-primary font-medium">收到消息:</span>
                <span>{{ formatToDateTime(item.time) }}</span>
              </div>
              <div>
                {{ item.res }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </ShopCard>
</template>
<script lang="ts" setup>
import { reactive, watchEffect, computed } from 'vue'
import { formatToDateTime, useWebSocket } from '@shoptop/utils'

const state = reactive({
  server: 'ws://localhost:3300/test',
  sendValue: '',
  recordList: [] as { id: number; time: number; res: string }[],
})

const { status, data, send, close, open } = useWebSocket(state.server, {
  autoReconnect: false,
  heartbeat: true,
})

watchEffect(() => {
  if (data.value) {
    try {
      const res = JSON.parse(data.value)
      state.recordList.push(res)
    } catch (error) {
      state.recordList.push({
        res: data.value,
        id: Math.ceil(Math.random() * 1000),
        time: new Date().getTime(),
      })
    }
  }
})

const getIsOpen = computed(() => status.value === 'OPEN')
const getTagType = computed(() => (getIsOpen.value ? 'success' : 'error'))

const getList = computed(() => {
  return [...state.recordList].reverse()
})

function handlerSend() {
  send(state.sendValue)
  state.sendValue = ''
}

function toggle() {
  if (getIsOpen.value) {
    close()
  } else {
    open()
  }
}
</script>
