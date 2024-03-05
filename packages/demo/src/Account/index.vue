<!--
 * @Author       : ya2glu@163.com
 * @Date         : 2023-11-16 10:06:07
 * @LastEditTime : 2023-12-26 15:27:40
 * @LastEditors  : ya2glu
 * @Description  : account modules
 * @FilePath     : \Shop3\apps\admin\src\pages\demo\system\account\index.vue
-->
<script lang="ts" setup>
import { ref } from 'vue'

import { useForm } from '@shoptop/design'
import { formSchema, userColumns } from './schemas'
import { getDeptTree, getDeptUser } from '@/apis/sys/index'
import AccountAddModal from './modules/accountAddModal.vue'
const deptKeys = ref('')
const bgGrid = ref({
  cols: 24,
  rows: null,
  xGap: 8,
  yGap: 12,
})
const deptTreeData = ref([])
getDeptTree()
  .then((res) => {
    deptTreeData.value = res
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('🔌deptTreeData:', deptTreeData.value)
  })

const treeOptions = ref({
  showLine: true,
  data: deptTreeData,
  pattern: deptKeys,
})
const formRef = ref(null)
const formModel = ref({})
const [formReg, { getFieldValue, validate }] = useForm({
  inline: true,
  actions: true,
  schemas: formSchema,
  actionsProps: {
    span: 8,
    submitText: '查询',
  },
})
let expandState = ref(false)

const accountAddModalRef = ref()
function handleAccountAddModal() {
  console.log('add ->', accountAddModalRef)
  return accountAddModalRef.value.open()
}
</script>
<template>
  <ShopGrid
    class="h-full p-2"
    :cols="bgGrid.cols"
    :x-gap="bgGrid.xGap"
    :y-gap="bgGrid.yGap"
  >
    <ShopGridItem :span="6">
      <ShopCard class="h-full" title="部门列表" :bordered="false" embedded>
        <template #header-extra>
          <ShopPopover
            placement="bottom"
            trigger="click"
            :style="{ padding: '3px' }"
          >
            <template #trigger>
              <ShopIconify
                class="cursor-pointer"
                icon="icon-park-outline:more-one"
                size="22"
                hoverColor="#2a63d5"
              />
            </template>
            <span>
              <ShopSpace vertical>
                <ShopButton
                  quaternary
                  size="small"
                  @click="() => (expandState = true)"
                  >展开全部</ShopButton
                >
                <ShopButton
                  quaternary
                  size="small"
                  @click="() => (expandState = false)"
                  >折叠全部</ShopButton
                >
              </ShopSpace>
            </span>
          </ShopPopover>
        </template>
        <ShopInput v-model:value="deptKeys" placeholder="搜索" clearable>
          <template #prefix>
            <ShopIconify icon="mdi:search" size="18" color="#c2c2c2" />
          </template>
        </ShopInput>
        <ShopTree
          :show-line="treeOptions.showLine"
          :data="treeOptions.data"
          :pattern="treeOptions.pattern"
          :default-expand-all="expandState"
          expand-on-click
          selectable
          block-line
        ></ShopTree>
      </ShopCard>
    </ShopGridItem>
    <ShopGridItem :span="18">
      <ShopSpace vertical>
        <ShopCard :bordered="false" embedded>
          <ShopForm
            ref="formRef"
            class="w-full"
            @register="formReg"
            v-model:model="formModel"
          ></ShopForm>
        </ShopCard>
        <!-- <ShopCard :bordered="false" embedded> -->
        <ShopTable
          ref="userTableRef"
          max-height="700"
          min-height="700"
          :columns="userColumns"
          :data="deptUserData"
          :options="{
            api: getDeptUser,
            pagination: true,
            border: 'none',
          }"
          :row-config="{ isHover: true }"
          stripe
        >
          <template #toolbar>
            <div class="pb-2">
              <ShopButton type="info" @click="handleAccountAddModal"
                >新增账号</ShopButton
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
        <!-- </ShopCard> -->
      </ShopSpace>
    </ShopGridItem>
  </ShopGrid>
  <AccountAddModal ref="accountAddModalRef" />
</template>

<style lang="less" scoped></style>


