import { loadRoutesFromModules } from '@shoptop/utils'
import { RouteRecordRaw } from 'vue-router'

const routeModuleRecord = import.meta.glob('./modules/**/*.ts', {
  eager: true,
}) as any
const routeModules: RouteRecordRaw[] = loadRoutesFromModules(routeModuleRecord)

export const asyncRoutes = [...routeModules]
