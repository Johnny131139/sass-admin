import type { LocaleType } from '@shoptop/types'
import { computed } from 'vue'
import { LOCALE_KEY } from '@shoptop/constants'
import { useLocalStorage } from '@shoptop/utils'
import { localeSetting } from './config'

const store = useLocalStorage(LOCALE_KEY, localeSetting)

export function setLocale(locale: LocaleType) {
  store.value.locale = locale
}

export const getLocale = computed(() => store.value.locale)
