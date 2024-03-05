<script lang="ts" setup>
import { useMsg, useDialog, useNotice } from '@shoptop/design'

const msg = useMsg()
const dialog = useDialog()
const notification = useNotice()

const diologOptions = {
  title: 'Tip',
  content: 'content message...',
  positiveText: '确定',
  negativeText: '取消',
  onPositiveClick: () => {
    msg.success('确定')
  },
  onNegativeClick: () => {
    msg.error('取消')
  },
}

const modalOptions = {
  title: 'Tip',
  content: 'content message...',
  positiveText: '确认',
}

const notificationOptions = {
  content: '说点啥呢',
  meta: '想不出来',
  duration: 2500,
  keepAliveOnHover: true,
}
</script>

<template>
  <ShopCard title="消息示例">
    <ShopCard class="w-full h-32 bg-white rounded-md" title="Message">
      <ShopButton @click="msg.info('Info message')" class="mr-2">
        Info
      </ShopButton>
      <ShopButton
        @click="msg.success('Success message')"
        class="mr-2"
        type="success"
      >
        Success
      </ShopButton>
      <ShopButton
        @click="msg.warning('Warning message')"
        class="mr-2"
        type="warning"
      >
        Warning
      </ShopButton>
      <ShopButton @click="msg.error('Error message')" class="mr-2" type="error">
        Error
      </ShopButton>
      <ShopButton
        @click="msg.loading('Loading...')"
        class="mr-2"
        type="primary"
      >
        Loading
      </ShopButton>
    </ShopCard>

    <ShopCard class="w-full h-32 mt-5 bg-white rounded-md" title="Comfirm">
      <ShopButton @click="dialog.info(diologOptions)" class="mr-2">
        Info
      </ShopButton>
      <ShopButton
        @click="dialog.warning(diologOptions)"
        type="warning"
        class="mr-2"
      >
        Warning
      </ShopButton>
      <ShopButton
        @click="dialog.success(diologOptions)"
        type="success"
        class="mr-2"
      >
        Success
      </ShopButton>
      <ShopButton
        @click="dialog.error(diologOptions)"
        type="error"
        class="mr-2"
      >
        Error
      </ShopButton>
    </ShopCard>

    <ShopCard class="w-full h-32 mt-5 bg-white rounded-md" title="Modal">
      <ShopButton @click="dialog.info(modalOptions)" class="mr-2">
        Info
      </ShopButton>
      <ShopButton
        @click="dialog.success(modalOptions)"
        type="success"
        class="mr-2"
      >
        Success
      </ShopButton>
      <ShopButton @click="dialog.error(modalOptions)" type="error" class="mr-2">
        Error
      </ShopButton>
      <ShopButton
        @click="dialog.warning(modalOptions)"
        type="warning"
        class="mr-2"
      >
        Warning
      </ShopButton>
    </ShopCard>

    <ShopCard class="w-full h-32 mt-5 bg-white rounded-md" title="Notification">
      <ShopButton @click="notification.info(notificationOptions)" class="mr-2">
        Info
      </ShopButton>
      <ShopButton
        @click="notification.success(notificationOptions)"
        type="success"
        class="mr-2"
      >
        Success
      </ShopButton>
      <ShopButton
        @click="notification.error(notificationOptions)"
        type="error"
        class="mr-2"
      >
        Error
      </ShopButton>
      <ShopButton
        @click="notification.warning(notificationOptions)"
        type="warning"
        class="mr-2"
      >
        Warning
      </ShopButton>
    </ShopCard>
  </ShopCard>
</template>
