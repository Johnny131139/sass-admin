<script lang="ts" setup>
import { ref } from 'vue'
import { useForm } from '@shoptop/design'
import { accountAddFormSchema } from './schemas'
const isModalShow = ref(false)

function open() {
  return (isModalShow.value = true)
}
defineExpose({
  open,
})

const model = ref({})
const [accountFormReg, { getFieldValue, validate }] = useForm({
  inline: true,
  actions: false,
  schemas: accountAddFormSchema,
  labelProps: {
    labelPlacement: 'left',
    labelAlign: 'right'
  },
  gridProps: {
    span: 24
  }
})
</script>
<template>
  <ShopModal
    v-model:show="isModalShow"
    preset="card"
    title="新增账号"
    :bordered="false"
    :closeOnEsc="false"
    :maskClosable="false"
  >
    <ShopForm
      ref="accountFormRef"
      class="w-full"
      @register="accountFormReg"
      v-model:model="model"
    >
    </ShopForm>

    <template #action>
      <div class="w-full flex justify-right">
        <ShopSpace>
          <ShopButton type="primary">新增</ShopButton>
          <ShopButton type="tertiary">取消</ShopButton>
        </ShopSpace>
      </div>
    </template>
  </ShopModal>
</template>

<style lang="less" scoped></style>
