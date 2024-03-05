<script lang="ts" setup>
import { reactive, ref, unref, computed } from 'vue';
import {
  GithubFilled,
  WechatFilled,
  AlipayCircleFilled,
  GoogleCircleFilled,
  TwitterCircleFilled
} from '@ant-design/icons-vue';
import { useI18n } from '@shoptop/locale';
import { notice } from '@shoptop/design'
import { useUserStore } from '@/store/user';
import {
  LoginStateEnum,
  useLoginState,
  useFormRules,
  useFormValid
} from './use-login';
import LoginFormTitle from './login-form-title.vue';

const formRef = ref();
const loading = ref(false);
const rememberMe = ref(false);

const { t } = useI18n();
const userStore = useUserStore();
const { setLoginState, getLoginState } = useLoginState();
const { getFormRules } = useFormRules();

const formData = reactive({
  account: 'Shop',
  password: '123456'
});

const { validForm } = useFormValid(formRef);
//onKeyStroke('Enter', handleLogin);

const show = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

async function handleLogin() {
  // 暂时不做校验
  // const data = await validForm()
  // if (!data) return
  try {
    loading.value = true;
    const userInfo = await userStore.login({
      password: formData.password,
      username: formData.account,
      mode: 'none' //不要默认的错误提示
    });

    if (userInfo) {
      notice.success({
        content: t('sys.login.loginSuccessTitle'),
        meta: `${t('sys.login.loginSuccessDesc')}: ${userInfo.realname}`,
        duration: 3000
      });
    }
  } catch (error) {
    // dialog.error({
    //   title: t('sys.api.errorTip'),
    //   content:
    //     (error as unknown as Error).message || t('sys.api.networkExceptionMsg')
    // });
  } finally {
    loading.value = false;
  }
}
</script>
<template>
  <login-form-title v-show="show" class="enter-x" />
  <Shop-form
    :model="formData"
    :rules="getFormRules"
    ref="formRef"
    v-show="show"
    @keypress.enter="handleLogin"
  >
    <Shop-form-item class="enter-x" inline :show-label="false" >
      <Shop-input
        size="large"
        v-model:value="formData.account"
        :placeholder="t('sys.login.userName')"
        class="fix-auto-fill"
      />
    </Shop-form-item>
    <Shop-form-item class="enter-x" inline :show-label="false">
      <Shop-input
        type="password"
        show-password-on="click"
        size="large"
        v-model:value="formData.password"
        :placeholder="t('sys.login.password')"
      />
    </Shop-form-item>

    <Shop-grid class="enter-x">
      <Shop-grid-item :span="12">
        <Shop-form-item inline :show-label="false">
          <!-- No logic, you need to deal with it yourself -->
          <Shop-checkbox v-model:checked="rememberMe" size="small">
            {{t('sys.login.rememberMe')}}
          </Shop-checkbox>
        </Shop-form-item>
      </Shop-grid-item>
      <Shop-grid-item :span="12" >
        <Shop-form-item inline :show-label="false" class="justify-items-end" >
          <!-- No logic, you need to deal with it yourself -->
          <Shop-button
            text
            tag="a"
            type="primary"
            size="small"
            @click="setLoginState(LoginStateEnum.RESET_PASSWORD)"
          >
            {{t('sys.login.forgetPassword')}}
          </Shop-button>
        </Shop-form-item>
      </Shop-grid-item>
    </Shop-grid>

    <Shop-form-item class="enter-x" inline :show-label="false" >
      <Shop-button
        type="primary"
        size="large"
        block
        @click="handleLogin"
        :loading="loading"
      >
        {{t('sys.login.loginButton')}}
      </Shop-button>
    </Shop-form-item>

    <Shop-grid class="enter-x" :cols="3">
      <Shop-grid-item :md="8" :xs="24">
        <Shop-button block @click="setLoginState(LoginStateEnum.MOBILE)">
          {{t('sys.login.mobileSignInFormTitle')}}
        </Shop-button>
      </Shop-grid-item>
      <Shop-grid-item :md="8" :xs="24" class="md:!my-0 xs:mx-0 md:mx-2">
        <Shop-button block @click="setLoginState(LoginStateEnum.QR_CODE)">
          {{t('sys.login.qrSignInFormTitle')}}
        </Shop-button>
      </Shop-grid-item>
      <Shop-grid-item :md="7" :xs="24">
        <Shop-button block @click="setLoginState(LoginStateEnum.REGISTER)">
          {{t('sys.login.registerButton')}}
        </Shop-button>
      </Shop-grid-item>
    </Shop-grid>

    <Shop-divider class="enter-x">{{t('sys.login.otherSignIn')}}</Shop-divider>

    <div class="flex justify-evenly enter-x" :class="`sign-in-way`">
      <github-filled />
      <wechat-filled />
      <alipay-circle-filled />
      <google-circle-filled />
      <twitter-circle-filled />
    </div>
  </Shop-form>
</template>
