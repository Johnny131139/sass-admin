<script lang="ts" setup>
import { ref } from 'vue'
import { ShopColumns, useTable } from '@shoptop/design/src/table'
import { getUseTableData } from '../apis/table'
const columns: ShopColumns = [
  { field: 'userId', title: 'id', width: 100 },
  { field: 'username', title: '名称', width: 150 },
  {
    field: 'desc',
    title: '备注',
    width: 150,
    slots: {
      default: 'desc_default',
    },
  },
]
const Ref = ref(null)
const [registerTable, { reload }] = useTable({
  title: '角色列表',
  border: true,
  api: getUseTableData,
  params: {
    i: 'role',
    a: 'list',
  },
  stripe: true,
  pagination: true,
  align: 'center',
  columns,
})
</script>
<template>
  <div class="p-2">
    <ShopTable @register="registerTable">
      <template #desc_default="{ row, rowIndex }">
        {{ row.desc }}
      </template>
    </ShopTable>
  </div>
</template>
