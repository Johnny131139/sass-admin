import {
  StoreGeneric,
  storeToRefs,
  useSiteGeneral as siteGeneralStore,
} from '@shoptop/stores'

import { _merge } from '@shoptop/utils'
import { DefineSiteGeneralOptions } from '@shoptop/types'

export const useSiteGeneral = () => {
  const useSiteGeneralStore = siteGeneralStore()
  const siteGeneral = storeToRefs(
    useSiteGeneralStore as StoreGeneric,
  ) as unknown as DefineSiteGeneralOptions
  const initSiteGeneralConfig = (
    configs: DeepPartial<DefineSiteGeneralOptions>,
  ) => {
    useSiteGeneralStore.$patch((state) => {
      _merge(state, configs)
    })
  }
  return {
    ...siteGeneral,
    initSiteGeneralConfig,
  }
}
