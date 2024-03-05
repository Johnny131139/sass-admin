<script lang="ts" setup>
import { ref, unref } from 'vue'
import { QrCode } from '@shoptop/components'
import type { QrCodeActionType } from '@shoptop/components'
import LogoImg from '@/assets/images/logo.png'
import { type Nullable } from '@shoptop/types'

const qrCodeUrl = 'https://github.com/Shopjs/Shop3' //github地址
const qrRef = ref<Nullable<QrCodeActionType>>(null)
const qrDiyRef = ref<Nullable<QrCodeActionType>>(null)
function download() {
  const qrEl = unref(qrRef)
  if (!qrEl) return
  qrEl.download('文件名')
}
function downloadDiy() {
  const qrEl = unref(qrDiyRef)
  if (!qrEl) return
  qrEl.download('Qrcode')
}

function onQrcodeDone({ ctx }: any) {
  if (ctx instanceof CanvasRenderingContext2D) {
    // 额外绘制
    ctx.fillStyle = 'black'
    ctx.font = '16px "微软雅黑"'
    ctx.textBaseline = 'bottom'
    ctx.textAlign = 'center'
    ctx.fillText('你帅你先扫', 100, 195, 200)
  }
}
</script>

<template>
  <ShopCard title="二维码组件使用示例">
    <ShopSpace :size="30">
      <ShopCard title="基础示例" :canExpan="true">
        <QrCode :value="qrCodeUrl" />
      </ShopCard>
      <ShopCard title="渲染成img标签示例">
        <QrCode :value="qrCodeUrl" tag="img" />
      </ShopCard>
      <ShopCard title="配置样式示例">
        <QrCode
          :value="qrCodeUrl"
          :options="{
            color: { dark: '#55D187' },
          }"
        />
      </ShopCard>
      <ShopCard title="本地logo示例">
        <QrCode :value="qrCodeUrl" :logo="LogoImg" />
      </ShopCard>
      <ShopCard title="在线logo示例">
        <QrCode
          :value="qrCodeUrl"
          logo="https://vebn.oss-cn-beijing.aliyuncs.com/Shop/logo.png"
          :options="{
            color: { dark: '#55D187' },
          }"
        />
      </ShopCard>
      <ShopCard title="logo配置示例">
        <QrCode
          :value="qrCodeUrl"
          :logo="{
            src: 'https://vebn.oss-cn-beijing.aliyuncs.com/Shop/logo.png',
            logoSize: 0.2,
            borderSize: 0.05,
            borderRadius: 50,
            bgColor: 'blue',
          }"
        />
      </ShopCard>
    </ShopSpace>
    <div style="height: 30px"></div>
    <ShopSpace :size="30">
      <ShopCard title="下载示例">
        <QrCode :value="qrCodeUrl" ref="qrRef" :logo="LogoImg" />
        <ShopButton class="mb-2" type="primary" @click="download">
          下载
        </ShopButton>
        <div class="msg">
          (在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)
        </div>
      </ShopCard>
      <ShopCard title="扩展绘制示例">
        <QrCode
          :value="qrCodeUrl"
          :width="200"
          :options="{ margin: 5 }"
          ref="qrDiyRef"
          :logo="LogoImg"
          @done="onQrcodeDone"
        />
        <ShopButton class="mb-2" type="primary" @click="downloadDiy">
          下载
        </ShopButton>
        <div class="msg">要进行扩展绘制则不能将tag设为img</div>
      </ShopCard>
      <ShopCard title="配置大小示例">
        <QrCode :value="qrCodeUrl" :width="300" />
      </ShopCard>
    </ShopSpace>
  </ShopCard>
</template>
