import { defineStore } from 'pinia'
import { FooterLinkOptions, DefineSiteGeneralOptions } from '@shoptop/types'
import { type ComposerTranslation, i18n } from '@shoptop/locale'
// @ts-ignore
import defaultLogo from '@/assets/images/logo.png'
// @ts-ignore
import defaultAvatar from '@/assets/images/header.jpg'
import { getGlobalConfig } from '@shoptop/utils'

const { title } = getGlobalConfig(import.meta.env)

// github repo url
export const GITHUB_URL = 'https://github.com/Shopjs/Shop3'

// Shop3-doc
export const DOC_URL = 'https://Shopjs.github.io/Shop3-doc/'

// site url
export const SITE_URL = 'https://Shop.mufei88.com/'

const links = (t: ComposerTranslation): FooterLinkOptions[] => [
  {
    label: t('layout.footer.onlinePreview'),
    url: SITE_URL,
  },
  {
    icon: 'uim:github',
    url: GITHUB_URL,
  },
  {
    label: t('layout.footer.onlineDocument'),
    url: DOC_URL,
  },
]

export const useSiteGeneral = defineStore({
  id: 'APP_SITE_GENERAL_OPTIONS',
  state: (): DefineSiteGeneralOptions => ({
    logo: defaultLogo,
    title,
    copyright: '2023 Shop Admin',
    links: links(i18n.global.t),
    avatar: defaultAvatar,
    username: 'Shop Admin',
  }),
})
