<script setup lang="ts">
import {
  downloadByUrl,
  downloadByData,
  downloadByBase64,
  downloadByOnlineUrl,
} from '@shoptop/utils'
import imgBase64 from './imgBase64'

const handleDownByData = () => {
  downloadByData('text content', 'testName.txt')
}
const handleDownloadByUrl = () => {
  downloadByUrl({
    url: 'https://codeload.github.com/anncwb/vue-Shop-admin-doc/zip/master',
    target: '_self',
  })

  downloadByUrl({
    url: 'https://vebn.oss-cn-beijing.aliyuncs.com/Shop/logo.png',
    target: '_self',
  })
}

const handleDownloadByBase64 = () => {
  downloadByBase64(imgBase64, 'logo.png')
}

const handleDownloadByOnlineUrl = () => {
  downloadByOnlineUrl(
    'https://avatars.githubusercontent.com/u/76995045?s=48&v=4',
    'logo.png',
  )
}
</script>

<template>
  <ShopCard title="文件下载示例">
    <ShopCard title="根据后台接口文件流下载">
      <ShopButton type="primary" @click="handleDownByData">
        文件流下载
      </ShopButton>
    </ShopCard>
    <ShopCard title="根据文件地址下载文件">
      <ShopButton type="primary" @click="handleDownloadByUrl">
        文件地址下载
      </ShopButton>
    </ShopCard>
    <ShopCard title="base64流下载">
      <ShopButton type="primary" @click="handleDownloadByBase64">
        base64流下载
      </ShopButton>
    </ShopCard>
    <ShopCard title="图片Url下载">
      <ShopButton type="primary" @click="handleDownloadByOnlineUrl">
        图片Url下载
      </ShopButton>
    </ShopCard>
  </ShopCard>
</template>
