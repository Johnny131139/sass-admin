import type { VxeGridProps,VxeTableEvents } from 'vxe-table-demonic'
import { VxeGridPropTypes } from 'vxe-table-demonic'

export type ShopTableProps<D = any> = VxeGridProps<D> & {
  api?: Function
  params?: Object
  title?: string
  pagination?: boolean | VxeGridPropTypes.PagerConfig
  afterFetch?: Function
}
export type ShopColumns = VxeGridPropTypes.Columns

export type ShopCellClick=VxeTableEvents.CellClick
