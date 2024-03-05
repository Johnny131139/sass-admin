<!--
 * @Author       : ya2glu@163.com
 * @Date         : 2023-12-26 15:51:03
 * @LastEditTime : 2023-12-26 15:51:13
 * @LastEditors  : ya2glu
 * @Description  : 请输入描述信息
 * @FilePath     : \Shop3\packages\demo\src\Password\index.vue
-->
<script lang="ts" setup>
import { ref } from 'vue'
import { useForm } from '@shoptop/design'
import { formSchema } from './schemas'
const formModel = ref({})

const [pwdFormReg, {}] = useForm({
  actions: false,
  schemas: formSchema,
  gridProps: {
    span: 12
  }
})
</script>

<template>
  <ShopGrid style="padding: 20px" :cols="12" :x-gap="8" :y-gap="12">
    <ShopGridItem :span="5" :offset="3">
      <ShopCard :bordered="false" embedded>
        <ShopForm @register="pwdFormReg" :model="formModel" />
      </ShopCard>
    </ShopGridItem>
  </ShopGrid>
</template>

<style lang="less" scoped></style>
