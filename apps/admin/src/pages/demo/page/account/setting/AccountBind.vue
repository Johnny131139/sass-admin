<script lang="ts" setup>
import { accountBindList } from './data'
</script>
<template>
  <ShopCard title="账号绑定" :canExpan="false">
    <template v-for="item in accountBindList" :key="item.key">
      <ShopCard :title="item.title">
        <template #header-extra>
          <div
            class="float-right mt-10px mr-30px text-blue-500 text-font-normal cursor-pointer"
            v-if="item.extra"
          >
            {{ item.extra }}
          </div>
        </template>
        <div class="content">
          <ShopIconify
            v-if="item.avatar"
            class="avatar"
            :icon="item.avatar"
            :color="item.color"
          />
          <div class="text">{{ item.description }}</div>
        </div>
      </ShopCard>
    </template>
  </ShopCard>
</template>

<style lang="less" scoped>
.content {
  display: flex;
  align-items: center;
  .avatar {
    font-size: 40px !important;
  }
  .text {
    margin-left: 12px;
  }
}
</style>
