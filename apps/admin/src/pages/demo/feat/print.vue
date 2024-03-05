<template>
  <ShopCard title="打印示例">
    <ShopCard title="json打印表格">
      <ShopButton type="primary" @click="jsonPrint">打印</ShopButton>
    </ShopCard>
    <ShopCard title="图片打印">
      <ShopButton type="primary" @click="imagePrint">Image Print</ShopButton>
    </ShopCard>
    <ShopCard title="二维码打印">
      <qr-code id="print-content" value="Hello World" :width="200" />
      <ShopButton type="primary" @click="qrcodePrint">Qrcode Print</ShopButton>
    </ShopCard>
  </ShopCard>
</template>
<script lang="ts" setup>
import { QrCode } from '@shoptop/components'
import printJS from 'print-js'

const jsonPrint = () => {
  printJS({
    printable: [
      { name: 'll', email: '123@gmail.com', phone: '123' },
      { name: 'qq', email: '456@gmail.com', phone: '456' },
    ],
    properties: ['name', 'email', 'phone'],
    type: 'json',
  })
}

const imagePrint = () => {
  printJS({
    printable: [
      'https://anncwb.github.io/anncwb/images/preview1.png',
      'https://anncwb.github.io/anncwb/images/preview2.png',
    ],
    type: 'image',
    header: 'Multiple Images',
    imageStyle: 'width:100%;',
  })
}

const qrcodePrint = () => {
  const element = document.getElementById('print-content') as HTMLElement
  const targetElement = element.children[0] as HTMLCanvasElement
  // 获取Canvas元素转为url
  const url = targetElement.toDataURL()
  printJS({
    printable: url, //如果是图片资源可以直接使用 targetElement.src
    type: 'image',
    header: 'qrcode',
    imageStyle: 'width:100%;',
  })
}
</script>
