import { ref, unref } from 'vue'
import { ShopTableProps } from '../type'
import { error } from '../../../index'

export interface tableMethod {
  reload: () => void
  setProps: (props: ShopTableProps) => void
}

export function useTable(props: ShopTableProps): [Function, tableMethod] {
  const tableRef = ref<Nullable<tableMethod>>(null)

  function register(instance) {
    tableRef.value = instance
    props && instance.setProps(props)
  }
  function getInstance(): tableMethod {
    const table = unref(tableRef)
    if (!table) {
      error('表格实例不存在')
    }
    return table as tableMethod
  }
  const methods: tableMethod = {
    reload: () => getInstance().reload(),
    setProps: (props) => getInstance().setProps(props),
  }
  return [register, methods]
}
