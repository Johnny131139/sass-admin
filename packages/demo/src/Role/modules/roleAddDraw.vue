<!--
 * @Author       : ya2glu@163.com
 * @Date         : 2023-11-16 17:36:51
 * @LastEditTime : 2023-12-06 14:09:22
 * @LastEditors  : ya2glu
 * @Description  : role add Draw
 * @FilePath     : \Shop3\apps\admin\src\pages\demo\system\role\modules\roleAddDraw.vue
-->
<script lang="ts" setup>
import { ref } from 'vue'
import { useForm } from '@shoptop/design'
import { roleAddFormSchema } from "./schemas";
const roleDrawerFlag = ref(false)

function open() {
  return (roleDrawerFlag.value = true)
}
defineExpose({
  open,
})

const [roleFormReg, { getFieldValue, validate }] = useForm({
  inline: true,
  actions: true,
  schemas: roleAddFormSchema,
})
const model = ref({})
</script>
<template>
  <ShopDrawer
    v-model:show="roleDrawerFlag"
    :width="500"
    placement="right"
    :mask-closable="false"
  >
    <ShopDrawerContent closable>
      <template #header>新增角色</template>
      <ShopForm
        ref="roleFormRef"
        class="w-full"
        @register="roleFormReg"
        v-model:model="model"
      />
      <template #footer>
        <ShopSpace>
          <ShopButton type="primary">新增</ShopButton>
          <ShopButton type="tertiary">取消</ShopButton>
        </ShopSpace>
      </template>
    </ShopDrawerContent>
  </ShopDrawer>
</template>

<style lang="less" scoped></style>
