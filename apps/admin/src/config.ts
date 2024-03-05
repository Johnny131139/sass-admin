import type { StaticConfig, DynamicConfig } from '@shoptop/types'

// github repo url
export const GITHUB_URL = 'https://github.com/Shopjs/Shop3'

// Shop3-doc
export const DOC_URL = 'https://Shopjs.github.io/Shop3-doc/'

// site url
export const SITE_URL = 'http://Shop.mufei88.com/'

const dynamicConfig: DynamicConfig = {
  __: '',
}

// ! You need to clear the browser cache after the change
const staticConfig: StaticConfig = {
  authType: 'frontend',

  // enable
  enableProgress: true,
}

export const config = { ...staticConfig, ...dynamicConfig }

export const siteSetting = { GITHUB_URL, DOC_URL, SITE_URL }
