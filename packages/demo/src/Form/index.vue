<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useForm } from '@shoptop/design'

import { transferFormilySchemas } from '@shoptop/design/src/form'
import { FormilyProps, BasicProps, selectParams } from './schemas'

const Ref = ref(null)

const [register, { getFieldValue, validate }] = useForm({
  actions: true,
  actionsProps: {
    span: 12,
    submitText: '好的',
  },
  // xGap: 30,
  rules: {
    number: [
      {
        required: true,
        trigger: ['input', 'blur'],
      },
    ],
  },
  schemas: BasicProps,
  title: '表单演示',
  submitFunc: (FormRef) => {
    console.log(FormRef.validate())
    console.log(FormRef.getFieldValue())
  },
})
const changeSelectParams = () => {
  selectParams.value = { id: 2 }
}
const model = ref({
  haha: '11',
  user: {
    age: '22',
    name: '',
  },
})
const value = ref()

function getValue() {
  validate()
  console.log(getFieldValue())
}
</script>
<template>
  <div class="p-2">
    <div>表单数据：{{ model }}</div>

    <ShopButton @click="changeSelectParams">改变选择框参数</ShopButton>
    <ShopButton @click="getValue">获取数据</ShopButton>
    <ShopForm @register="register" ref="Ref" v-model:model="model" />
  </div>
</template>
