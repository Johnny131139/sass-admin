<script lang="ts" setup>
import { reactive, ref, computed, unref } from 'vue'
import { CountDownInput } from '@shoptop/components'
import { useI18n } from '@shoptop/locale'
import {
  useLoginState,
  useFormRules,
  useFormValid,
  LoginStateEnum,
} from './use-login'
import LoginFormTitle from './login-form-title.vue'

const { t } = useI18n()
const { handleBackLogin, getLoginState } = useLoginState()
const { getFormRules } = useFormRules()

const formRef = ref()
const loading = ref(false)

const formData = reactive({
  mobile: '',
  sms: '',
})

const { validForm } = useFormValid(formRef)

const show = computed(() => unref(getLoginState) === LoginStateEnum.MOBILE)

async function handleLogin() {
  const data = await validForm()
  if (!data) return
  console.log(data)
}
</script>
<template>
  <template v-if="show">
    <login-form-title class="enter-x" />
    <Shop-form
      class="rd-2"
      :model="formData"
      :rules="getFormRules"
      ref="formRef"
    >
      <Shop-form-item name="mobile" class="enter-x" inline :show-label="false">
        <Shop-input
          size="large"
          v-model:value="formData.mobile"
          :placeholder="t('sys.login.mobile')"
          class="fix-auto-fill"
        />
      </Shop-form-item>
      <Shop-form-item name="sms" class="enter-x" inline :show-label="false">
        <count-down-input
          size="large"
          class="fix-auto-fill"
          v-model:value="formData.sms"
          :placeholder="t('sys.login.smsCode')"
        />
      </Shop-form-item>

      <div class="enter-x">
        <Shop-button
          type="primary"
          size="large"
          block
          @click="handleLogin"
          :loading="loading"
        >
          {{ t('sys.login.loginButton') }}
        </Shop-button>
        <Shop-button block class="mt-4" @click="handleBackLogin">
          {{ t('sys.login.backSignIn') }}
        </Shop-button>
      </div>
    </Shop-form>
  </template>
</template>
