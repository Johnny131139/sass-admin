<script lang="ts" setup>
import { reactive, ref, computed, unref } from 'vue'
import { useLoginState, useFormRules, LoginStateEnum } from './use-login'
import { CountDownInput } from '@shoptop/components'
import { useI18n } from '@shoptop/locale'
import LoginFormTitle from './login-form-title.vue'

const { t } = useI18n()
const { handleBackLogin, getLoginState } = useLoginState()
const { getFormRules } = useFormRules()

const formRef = ref()
const loading = ref(false)

const formData = reactive({
  account: '',
  mobile: '',
  sms: '',
})

const show = computed(
  () => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD,
)

async function handleReset() {
  const form = unref(formRef)
  if (!form) return
  await form.resetFields()
}
</script>

<template>
  <template v-if="show">
    <login-form-title class="enter-x" />
    <Shop-form :model="formData" :rules="getFormRules" ref="formRef">
      <Shop-form-item name="account" class="enter-x" inline :show-label="false">
        <Shop-input
          size="large"
          v-model:value="formData.account"
          :placeholder="t('sys.login.userName')"
        />
      </Shop-form-item>

      <Shop-form-item name="mobile" class="enter-x" inline :show-label="false">
        <Shop-input
          size="large"
          v-model:value="formData.mobile"
          :placeholder="t('sys.login.mobile')"
        />
      </Shop-form-item>
      <Shop-form-item name="sms" class="enter-x" inline :show-label="false">
        <count-down-input
          size="large"
          v-model:value="formData.sms"
          :placeholder="t('sys.login.smsCode')"
        />
      </Shop-form-item>

      <div class="enter-x">
        <Shop-button
          type="primary"
          size="large"
          block
          @click="handleReset"
          :loading="loading"
        >
          {{ t('common.resetText') }}
        </Shop-button>
        <Shop-button size="large" block class="mt-4" @click="handleBackLogin">
          {{ t('sys.login.backSignIn') }}
        </Shop-button>
      </div>
    </Shop-form>
  </template>
</template>
