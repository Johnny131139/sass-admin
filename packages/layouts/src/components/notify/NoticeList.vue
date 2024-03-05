<script lang="ts" setup>
import { computed, ref, watch, unref } from 'vue'
import { ListItem } from './data'
import { isNumber } from '@shoptop/utils'

const props = withDefaults(
  defineProps<{
    list: Array<ListItem>
    pageSize?: boolean | number
    currentPage?: number
    titleRows?: number
    descRows?: number
    onTitleClick?: (Recordable) => void
  }>(),
  {
    list: [],
    pageSize: 5,
    currentPage: 1,
    titleRows: 1,
    descRows: 2,
    onTitleClick: null,
  },
)
const current = ref(props.currentPage || 1)
const getData = computed(() => {
  if (props.pageSize === false) return []
  let size = isNumber(props.pageSize) ? props.pageSize : 5
  return props.list.slice(size * (unref(current) - 1), size * unref(current))
})
watch(
  () => props.currentPage,
  (v) => {
    current.value = v
  },
)

function handleTitleClick(item: ListItem) {
  props.onTitleClick && props.onTitleClick(item)
}
</script>
<template>
  <ShopList class="Shop-header-notify-list" bordered>
    <template v-for="item in getData" :key="item.id">
      <ShopListItem>
        <ShopThing>
          <template #header>
            <ShopEllipsis
              class="w-40 text-sm cursor-pointer"
              @click="handleTitleClick"
            >
              {{ item.title }}
            </ShopEllipsis>
          </template>

          <template #avatar>
            <ShopAvatar v-if="item.avatar" round :src="item.avatar" />
            <span v-else> {{ item.avatar }}</span>
          </template>

          <template #description>
            <div v-if="item.type == '3'">
              <ShopTag size="small" :type="item.color">
                {{ item.extra }}
              </ShopTag>
              <div class="text-gray-600 text-sm py-1">
                {{ item.description }}
              </div>
            </div>
            <div v-else class="text-gray-400 text-xs">
              {{ item.datetime }}
            </div>
          </template>
        </ShopThing>
      </ShopListItem>
    </template>
  </ShopList>
</template>

<style lang="less" scoped>
.Shop-header-notify-list {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
