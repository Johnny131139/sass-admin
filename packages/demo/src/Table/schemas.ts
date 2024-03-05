import { ShopColumns } from '../../../designComponents/src/table'

export interface Data {
  table: {
    items: any[]
    total: number
  }
}
export const baseColumns: ShopColumns = [
  {
    field: 'userId',
    title: 'ID',
    align: 'center',
    width: '10%',
    sortable: true,
  },
  {
    field: 'username',
    title: '名称',
    align: 'center'
  },
  {
    field: 'realname',
    title: '真实名称',
  },
  {
    field: 'address',
    title: '地址',
  },
  {
    field: 'startTime',
    title: '开始时间',
    align: 'center',
  },
  {
    field: 'endTime',
    title: '结束时间',
    align: 'center',
  },
  {
    field: 'desc',
    title: '描述',
    align: 'center',
  },
  {
    field: 'action',
    title: '操作',
    align: 'center',
    slots: { default: 'action'},
  }
]
export const fixedColumns: ShopColumns = [
  { field: 'userId', title: 'id', width: 100, fixed: 'left' },
  { field: 'username', title: '名称', width: 120, fixed: 'left' },
  { field: 'realname', title: '真实名称', width: 280 },
  { field: 'address', title: '地址', width: 280 },
  { field: 'startTime', title: '开始时间', width: 280 },
  { field: 'endTime', title: '结束时间', width: 280 },
  {
    field: 'desc',
    title: '备注',
    width: 280,
    fixed: 'right',
  },
]

export const innerLabels: string[] = [
  'userId',
  'username',
  'realname',
  'address',
  'startTime',
  'endTime',
  'desc',
]

export const innerColumns: ShopColumns = [
  { field: 'label', title: 'label' },
  { field: 'value', title: 'value' },
]

export const treeColumns: ShopColumns = [
  {
    field: 'id',
    title: 'ID',
    width: '100px',
    type: 'checkbox',
    align: 'center',
    treeNode: true
  },
  {
    field: 'userName',
    title: '名称',
    align: 'center',
  },
  {
    field: 'address',
    title: '地址',
    align: 'center'
  },
  {
    field: 'startTime',
    title: '开始时间',
    align: 'center'
  },
  {
    field: 'endTime',
    title: '结束时间',
    align: 'center'
  },
  {
    field: 'description',
    title: '描述',
    align: 'center'
  }
]
