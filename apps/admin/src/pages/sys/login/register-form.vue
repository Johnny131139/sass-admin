<script lang="ts" setup>
import { reactive, ref, unref, computed } from 'vue'
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

const formRef = ref()
const loading = ref(false)

const formData = reactive({
  account: '',
  password: '',
  confirmPassword: '',
  mobile: '',
  sms: '',
  policy: false,
})

const { getFormRules } = useFormRules(formData)
const { validForm } = useFormValid(formRef)

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER)

async function handleRegister() {
  const data = await validForm()
  if (!data) return
  console.log(data)
}
</script>

<template>
  <template v-if="getShow">
    <login-form-title class="enter-x" />
    <Shop-form :model="formData" :rules="getFormRules" ref="formRef">
      <Shop-form-item name="account" class="enter-x" inline :show-label="false">
        <Shop-input
          class="fix-auto-fill"
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
      <Shop-form-item
        name="password"
        class="enter-x"
        inline
        :show-label="false"
      >
        <Shop-input
          size="large"
          visibilityToggle
          v-model:value="formData.password"
          :placeholder="t('sys.login.password')"
        />
      </Shop-form-item>
      <Shop-form-item
        name="confirmPassword"
        class="enter-x"
        inline
        :show-label="false"
      >
        <Shop-input
          size="large"
          type="password"
          visibilityToggle
          v-model:value="formData.confirmPassword"
          :placeholder="t('sys.login.confirmPassword')"
        />
      </Shop-form-item>

      <Shop-form-item class="enter-x" name="policy" inline :show-label="false">
        <!-- No logic, you need to deal with it yourself -->
        <Shop-checkbox v-model:checked="formData.policy" size="small">
          {{ t('sys.login.policy') }}
        </Shop-checkbox>
      </Shop-form-item>

      <Shop-button
        type="primary"
        class="enter-x"
        size="large"
        block
        @click="handleRegister"
        :loading="loading"
      >
        {{ t('sys.login.registerButton') }}
      </Shop-button>
      <Shop-button
        size="large"
        block
        class="mt-4 enter-x"
        @click="handleBackLogin"
      >
        {{ t('sys.login.backSignIn') }}
      </Shop-button>
    </Shop-form>
  </template>
</template>
