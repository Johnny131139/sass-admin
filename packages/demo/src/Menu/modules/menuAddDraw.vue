<script lang="ts" setup>
import { ref } from 'vue'
import { useForm } from "@shoptop/design";
import { menuAddSchema } from "./schemas";
const menuDrawerFlag = ref(false)

function open() {
  return (menuDrawerFlag.value = true)
}
defineExpose({
  open,
})

const [menuFormReg, {getFieldValue, validate}] = useForm({
  inline: true,
  actions: true,
  schemas: menuAddSchema,
  actionsProps: {
    span: 24,
    submitText: '新增',
    cancelText: '取消'
  }

})
const model = ref({})
</script>
<template>
  <ShopDrawer v-model:show="menuDrawerFlag" :width="500" placement="right" :mask-closable="false">
    <ShopDrawerContent closable>
      <template #header>新增菜单</template>
      <ShopForm ref="menuFormRef" class="w-full" @register="menuFormReg" v-model:model="model"/>
    </ShopDrawerContent>
  </ShopDrawer>
</template>

<style lang="less" scoped></style>
