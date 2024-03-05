<script lang="ts" setup>
import type { CropendResult, Cropper } from './typing'

import { ref, PropType } from 'vue'
import CropperImage from './index.vue'
import { dataURLtoBlob, isFunction } from '@shoptop/utils'
import { useI18n } from '@shoptop/locale'
import Icon from '../icon/index.vue'

type apiFunParams = { file: Blob; name: string; filename: string }

defineOptions({ name: 'CropperModal' })

const props = defineProps({
  circled: { type: Boolean, default: true },
  uploadApi: {
    type: Function as PropType<(params: apiFunParams) => Promise<any>>,
  },
  src: { type: String },
  size: { type: Number },
})

const emit = defineEmits(['uploadSuccess', 'uploadError', 'register', 'close'])

const showModal = ref(false)
let filename = ''
const src = ref(props.src || '')
const previewSource = ref('')
const cropper = ref<Cropper>()
let scaleX = 1
let scaleY = 1
const loading = ref(false)

const prefixCls = 'cropper-am'
const { t } = useI18n()

// Block upload
function handleBeforeUpload({ file }) {
  const realFile = file.file
  if (props.size && realFile.size > 1024 * 1024 * props.size) {
    emit('uploadError', { msg: t('component.cropper.imageTooBig') })
    return
  }
  const reader = new FileReader()
  reader.readAsDataURL(realFile)
  src.value = ''
  previewSource.value = ''
  reader.onload = function (e) {
    src.value = (e.target?.result as string) ?? ''
    filename = file.name
  }
  return false
}

function handleCropend({ imgBase64 }: CropendResult) {
  previewSource.value = imgBase64
}

function handleReady(cropperInstance: Cropper) {
  cropper.value = cropperInstance
}

function handlerToolbar(event: string, arg?: number) {
  if (event === 'scaleX') {
    scaleX = arg = scaleX === -1 ? 1 : -1
  }
  if (event === 'scaleY') {
    scaleY = arg = scaleY === -1 ? 1 : -1
  }
  cropper?.value?.[event]?.(arg)
}

async function handleOk() {
  const uploadApi = props.uploadApi
  if (uploadApi && isFunction(uploadApi)) {
    const blob = dataURLtoBlob(previewSource.value)
    try {
      loading.value = true
      const result = await uploadApi({ name: 'file', file: blob, filename })
      emit('uploadSuccess', { source: previewSource.value, data: result.url })
      emit('close')
    } finally {
      loading.value = false
    }
  }
}

defineExpose({ showModal })
</script>

<template>
  <ShopModal
    v-bind="$attrs"
    preset="dialog"
    v-model:show="showModal"
    :title="t('component.cropper.modalTitle')"
    width="800px"
    :loading="loading"
    @positive-click="handleOk"
    :negative-text="t('common.cancelText')"
    :positive-text="t('component.cropper.okText')"
  >
    <div :class="prefixCls">
      <div :class="`${prefixCls}-left`">
        <div :class="`${prefixCls}-cropper`">
          <CropperImage
            v-if="src"
            :src="src"
            height="300px"
            :circled="circled"
            @cropend="handleCropend"
            @ready="handleReady"
          />
        </div>

        <div :class="`${prefixCls}-toolbar`">
          <!-- 需要自定义去处理上传的逻辑 -->
          <ShopUpload
            action="https://naive-upload.free.beeceptor.com/"
            :fileList="[]"
            :show-file-list="false"
            accept="image/*"
            @beforeUpload="handleBeforeUpload"
          >
            <ShopTooltip>
              <template #trigger>
                <ShopButton size="tiny" type="primary">
                  <template #icon>
                    <Icon icon="ant-design:upload-outlined" />
                  </template>
                </ShopButton>
              </template>
              {{ t('component.cropper.selectImage') }}
            </ShopTooltip>
          </ShopUpload>
          <ShopSpace>
            <ShopTooltip>
              <template #trigger>
                <ShopButton
                  :disabled="!src"
                  size="tiny"
                  type="primary"
                  @click="handlerToolbar('reset')"
                >
                  <template #icon>
                    <Icon icon="ant-design:reload-outlined" :size="14" />
                  </template>
                </ShopButton>
              </template>
              {{ t('component.cropper.btn_reset') }}
            </ShopTooltip>
            <ShopTooltip>
              <template #trigger>
                <ShopButton
                  :disabled="!src"
                  size="tiny"
                  type="primary"
                  @click="handlerToolbar('rotate', -45)"
                >
                  <template #icon>
                    <Icon icon="ant-design:rotate-left-outlined" />
                  </template>
                </ShopButton>
              </template>
              {{ t('component.cropper.btn_rotate_left') }}
            </ShopTooltip>
            <ShopTooltip>
              <template #trigger>
                <ShopButton
                  :disabled="!src"
                  size="tiny"
                  type="primary"
                  @click="handlerToolbar('rotate', 45)"
                >
                  <template #icon>
                    <Icon icon="ant-design:rotate-right-outlined" />
                  </template>
                </ShopButton>
              </template>
              {{ t('component.cropper.btn_rotate_right') }}
            </ShopTooltip>
            <ShopTooltip>
              <template #trigger>
                <ShopButton
                  :disabled="!src"
                  size="tiny"
                  type="primary"
                  @click="handlerToolbar('scaleX')"
                >
                  <template #icon>
                    <Icon icon="vaadin:arrows-long-h" />
                  </template>
                </ShopButton>
              </template>
              {{ t('component.cropper.btn_scale_x') }}
            </ShopTooltip>
            <ShopTooltip>
              <template #trigger>
                <ShopButton
                  :disabled="!src"
                  size="tiny"
                  type="primary"
                  @click="handlerToolbar('scaleY')"
                >
                  <template #icon>
                    <Icon icon="vaadin:arrows-long-v" />
                  </template>
                </ShopButton>
              </template>
              {{ t('component.cropper.btn_scale_y') }}
            </ShopTooltip>
            <ShopTooltip>
              <template #trigger>
                <ShopButton
                  :disabled="!src"
                  size="tiny"
                  type="primary"
                  @click="handlerToolbar('zoom', 0.1)"
                >
                  <template #icon>
                    <Icon icon="ant-design:zoom-in-outlined" />
                  </template>
                </ShopButton>
              </template>
              {{ t('component.cropper.btn_zoom_in') }}
            </ShopTooltip>
            <ShopTooltip>
              <template #trigger>
                <ShopButton
                  :disabled="!src"
                  size="tiny"
                  type="primary"
                  @click="handlerToolbar('zoom', -0.1)"
                >
                  <template #icon>
                    <Icon icon="ant-design:zoom-out-outlined" />
                  </template>
                </ShopButton>
              </template>
              {{ t('component.cropper.btn_zoom_out') }}
            </ShopTooltip>
          </ShopSpace>
        </div>
      </div>
      <div :class="`${prefixCls}-right`">
        <div :class="`${prefixCls}-preview`">
          <img
            :src="previewSource"
            v-if="previewSource"
            :alt="t('component.cropper.preview')"
          />
        </div>
        <template v-if="previewSource">
          <div :class="`${prefixCls}-group`">
            <ShopAvatar :src="previewSource" size="large" />
            <ShopAvatar :src="previewSource" :size="48" />
            <ShopAvatar :src="previewSource" :size="64" />
            <ShopAvatar :src="previewSource" :size="80" />
          </div>
        </template>
      </div>
    </div>
  </ShopModal>
</template>

<style lang="less">
@prefix-cls: ~'cropper-am';

.@{prefix-cls} {
  display: flex;
  .n-upload {
    width: inherit !important;
  }

  &-left,
  &-right {
    height: 340px;
  }

  &-left {
    width: 55%;
  }

  &-right {
    width: 45%;
  }

  &-cropper {
    height: 300px;
    background: #eee;
    background-image: linear-gradient(
        45deg,
        rgb(0 0 0 / 25%) 25%,
        transparent 0,
        transparent 75%,
        rgb(0 0 0 / 25%) 0
      ),
      linear-gradient(
        45deg,
        rgb(0 0 0 / 25%) 25%,
        transparent 0,
        transparent 75%,
        rgb(0 0 0 / 25%) 0
      );
    background-position:
      0 0,
      12px 12px;
    background-size: 24px 24px;
  }

  &-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  &-preview {
    width: 220px;
    height: 220px;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid hsv(0, 0, 85%);
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid hsv(0, 0, 85%);
  }
}
</style>
