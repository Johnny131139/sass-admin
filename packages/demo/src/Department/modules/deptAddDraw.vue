<script lang="ts" setup>
import { ref } from 'vue'
import { useForm } from "@shoptop/design";
import { deptAddFormSchema } from './schemas'
const deptDrawFlag = ref(false)
function open() {
  return (deptDrawFlag.value = true)
}
function close() {
  return (deptDrawFlag.value = false)
}
defineExpose({
  open,
})

const [deptFormReg,{}] = useForm({
  inline: true,
  actions: false,
  schemas: deptAddFormSchema
})
const model = ref({})
</script>
<template>
  <ShopDrawer
    v-model:show="deptDrawFlag"
    :width="500"
    placement="right"
    :mask-closable="false"
  >
    <ShopDrawerContent closable>
      <template #header>新增部门</template>
      <ShopForm
        ref="deptFormRef"
        class="w-full"
        @register="deptFormReg"
        v-model:model="model"
      />
      <template #footer>
        <ShopSpace>
          <ShopButton type="primary">新增</ShopButton>
          <ShopButton type="tertiary" @click="close">取消</ShopButton>
        </ShopSpace>
      </template>
    </ShopDrawerContent>
  </ShopDrawer>
</template>

<style lang="less" scoped></style>
