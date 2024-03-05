<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useForm, useTable } from '@shoptop/design'
import { formSchema, menuColumns } from './schemas'

import MenuAddDraw from './modules/menuAddDraw.vue'
import { getMenuList } from '../apis/menu'

const formRef = ref(null)
const [formReg, { getFieldValue, validate }] = useForm({
  inline: true,
  actions: true,
  schemas: formSchema,
  actionsProps: {
    span: 8,
    submitText: '查询',
  },
})
const formModel = ref({})
const menuData: any = reactive({
  table: {
    items: [],
    total: 0,
  },
})
// const treeTableData = reactive<>({})
// const [menuTableReg, {}] = useTable({
//   // title: '菜单列表',
//   columns: menuColumns,
//   pagination: true,
//   border: 'inner',
//   isTreeTable: true,
//   treeConfig: {
//     transform: true,
//     rowField: 'id',
//     parentField: 'parentId'
//   }
// })

const menuAddDrawRef: any = ref(null)
function handleMenuAddDraw() {
  return menuAddDrawRef.value.open()
}

getMenuList().then((res) => {
  console.log('res', res)
  menuData.table.items = res
})

function handleToggleTree() {
  return null
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
      <ShopTable
        ref="menuTreeTable"
        :data="menuData.table.items"
        :columns="menuColumns"
        :options="{ pagination: true, border: 'inner'}"
        :tree-config="{
          transform: true,
          rowField: 'id',
          parentField: 'parentId',
          iconOpen: 'vxe-icon-square-minus',
          iconClose: 'vxe-icon-square-plus',
        }"
        :row-config="{ isHover: true }"
        @toggle-tree-expand="handleToggleTree"
      >
        <template #toolbar>
          <div class="pb-2">
            <ShopButton type="info" @click="handleMenuAddDraw"
              >新增菜单</ShopButton
            >
          </div>
        </template>
      </ShopTable>
    </ShopGridItem>
  </ShopGrid>
  <MenuAddDraw ref="menuAddDrawRef" />
</template>

<style lang="less" scoped></style>
