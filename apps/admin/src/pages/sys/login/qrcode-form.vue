<script lang="ts" setup>
import { computed, unref } from 'vue'
import { QrCode } from '@shoptop/components'
import { useI18n } from '@shoptop/locale'
import { useLoginState, LoginStateEnum } from './use-login'
import LoginFormTitle from './login-form-title.vue'

const testQrCodeUrl = 'https://vvbin.cn/next/login'

const { t } = useI18n()
const { handleBackLogin, getLoginState } = useLoginState()
const show = computed(() => unref(getLoginState) === LoginStateEnum.QR_CODE)
</script>

<template>
  <template v-if="show">
    <login-form-title class="enter-x" />
    <div class="enter-x min-w-64 min-h-64">
      <qr-code
        :value="testQrCodeUrl"
        class="flex flex-col justify-center items-center enter-x xl:justify-start"
        :width="280"
      />
      <Shop-divider class="enter-x">{{ t('sys.login.scanSign') }}</Shop-divider>
      <Shop-button
        size="large"
        block
        class="mt-4 enter-x"
        @click="handleBackLogin"
      >
        {{ t('sys.login.backSignIn') }}
      </Shop-button>
    </div>
  </template>
</template>
