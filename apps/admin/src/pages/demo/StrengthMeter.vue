<script lang="ts" setup>
import { StrengthMeter } from '@shoptop/components/index'
</script>

<template>
  <div class="p-2 h-full">
    <ShopCard>
      <h2>密码强度校验组件</h2>
      <div class="flex justify-center">
        <div class="demo-wrap p-10">
          <StrengthMeter placeholder="默认" />
          <StrengthMeter placeholder="禁用" disabled />
          <br />
          <StrengthMeter
            placeholder="隐藏input"
            :show-input="false"
            value="!@#qwe12345"
          />
        </div>
      </div>
    </ShopCard>
  </div>
</template>

<style lang="less" scoped>
.demo-wrap {
  width: 50%;
  border-radius: 10px;
  background-color: #fff;
}
</style>
