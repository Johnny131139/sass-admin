<script lang="ts" setup>
import { ref } from 'vue'
import { useForm, useTable } from '@shoptop/design'
import { formSchema, deptColumns } from './schemas'
import { getDepartment } from '@/apis/sys/index'
import DeptAddDraw from './modules/deptAddDraw.vue'
const formRef = ref(null)
const formModel = ref({})
const [formReg, {}] = useForm({
  inline: true,
  actions: true,
  schemas: formSchema,
  actionsProps: {
    span: 8,
    submitText: '查询',
  },
})
const [deptTableReg, {}] = useTable({
  columns: deptColumns,
  api: getDepartment,
  border: 'none',
  pagination: false,
  minHeight: '700px',
  rowConfig: {
    isHover: true,
  },
  round: true,
  treeConfig: {
    transform: 'true',
    rowField: 'id',
    parentField: 'parentId',
    iconOpen: 'vxe-icon-square-minus',
    iconClose: 'vxe-icon-square-plus',
  },
})
function handleDetail(row) {
  console.log(row)
  return null
}
const deptAddDrawRef: any = ref(null)

function addDept() {
  return deptAddDrawRef.value.open()
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
          :model="formModel"
        />
      </ShopCard>
    </ShopGridItem>
    <ShopGridItem :span="12">
      <ShopTable @register="deptTableReg">
        <template #toolbar>
          <div class="pb-2">
            <ShopButton type="info" @click="addDept()">新增部门</ShopButton>
          </div>
        </template>
        <template #action="{ row }">
          <ShopButton text type="primary" @click="handleDetail(row)"
            >详情</ShopButton
          >
          <ShopDivider vertical />
          <ShopButton text type="primary">编辑</ShopButton>
          <ShopDivider vertical />
          <ShopButton text type="error">删除</ShopButton>
        </template>
      </ShopTable>
    </ShopGridItem>
  </ShopGrid>
  <DeptAddDraw ref="deptAddDrawRef" />
</template>

<style lang="less" scoped></style>
