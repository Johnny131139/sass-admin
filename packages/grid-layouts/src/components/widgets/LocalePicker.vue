<script lang="ts" setup>
import TopButtonWrapper from '../comm/TopButtonWrapper.vue'
import { ref, unref, computed } from 'vue'
import { useLocale, localeList } from '@shoptop/locale'
import { LocaleType } from '@shoptop/types'
import { useAppInject } from '@shoptop/hooks'

const props = defineProps({
  /**
   * Whether to display text
   */
  showText: { type: Boolean, default: true },
  /**
   * Whether to refresh the interface when changing
   */
  reload: { type: Boolean, default: true },
})

const { changeLocale, getLocale } = useLocale()

const { isMobile } = useAppInject()

const selectedKeys = ref<string[]>([unref(getLocale)])

const getLocaleText = computed(() => {
  const key = selectedKeys.value[0]
  if (!key) {
    return ''
  }
  return localeList.find((item) => item.event === key)?.text || ''
})

async function toggleLocale(lang: LocaleType) {
  await changeLocale(lang)
  props.reload && location.reload()
}

function handleMenuEvent(menu: LocaleType) {
  console.log('menu', menu)
  if (unref(getLocale) === menu) {
    return
  }
  toggleLocale(menu)
}
</script>
<template>
  <ShopDropdown
    trigger="click"
    show-arrow
    :options="localeList"
    key-field="event"
    label-field="text"
    @select="handleMenuEvent"
  >
    <TopButtonWrapper>
      <div class="flex items-center">
        <ShopIconify icon="carbon:ibm-watson-language-translator" />
        <span v-if="showText && !isMobile" class="ml-2">{{
          getLocaleText
        }}</span>
      </div>
    </TopButtonWrapper>
  </ShopDropdown>
</template>
