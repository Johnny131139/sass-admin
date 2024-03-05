<!--
 * @Author       : ya2glu@163.com
 * @Date         : 2023-11-16 16:32:56
 * @LastEditTime : 2023-12-26 15:55:16
 * @LastEditors  : ya2glu
 * @Description  : role manager
 * @FilePath     : \Shop3\packages\demo\src\Role\index.vue
-->
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useForm, useTable } from '@shoptop/design'
import { roleSchema, roleColumns } from './schemas'

import RoleAddDraw from './modules/roleAddDraw.vue'
import { getRoleList } from '../apis/account'
const formRef = ref(null)
const [formReg, { getFieldValue, validate }] = useForm({
  inline: true,
  actions: true,
  schemas: roleSchema,
  actionsProps: {
    span: 8,
    submitText: '查询',
  },
})
const formModel = ref({})
const [roleTableReg, { reload }] = useTable({
  columns: roleColumns,
  api: getRoleList,
  pagination: true,
  border: 'none',
  minHeight: '700px',
  maxHeight: '700px',
  rowConfig: {
    isHover: true
  },
  stripe: true,
  round: true,
})

const roleAddDrawRef: any = ref(null)
function handleRoleAddDraw() {
  return roleAddDrawRef.value.open()
}
</script>
<template>
  <ShopGrid style="padding: 20px" :cols="12" :x-gap="8" :y-gap="12">
    <ShopGridItem :span="12">
      <ShopCard :bordered="false" embedded>
        <ShopForm
          ref="formRef"
          class="w-full"
          @register="formReg"
          v-model:model="formModel"
        />
      </ShopCard>
    </ShopGridItem>
    <ShopGridItem :span="12">
      <ShopTable @register="roleTableReg">
        <template #toolbar>
          <div class="pb-2">
            <ShopButton type="info" @click="handleRoleAddDraw"
              >新增角色</ShopButton
            >
          </div>
        </template>
        <template #action="{ row }">
          <ShopButton text type="primary">详情</ShopButton>
          <ShopDivider vertical />
          <ShopButton text type="primary">编辑</ShopButton>
          <ShopDivider vertical />
          <ShopButton text type="error">删除</ShopButton>
        </template>
      </ShopTable>
    </ShopGridItem>
  </ShopGrid>
  <RoleAddDraw ref="roleAddDrawRef" />
</template>

<style lang="less" scoped></style>
