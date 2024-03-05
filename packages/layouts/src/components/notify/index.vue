<script lang="ts" setup>
import { computed,  ref } from 'vue'
import { tabListData, ListItem } from './data'
import NoticeList from './NoticeList.vue'

const listData = ref(tabListData)

function onNoticeClick(record: ListItem) {
  console.log('你点击了通知，ID=' + record.id)
  record.titleDelete = !record.titleDelete
}

const props = defineProps({
  isDark: { type: Boolean, default: false },
})

const iconColor = computed(() =>
  props.isDark ? 'rgb(213,213,214)' : 'rgb(51, 54, 57)',
)
</script>

<template>
  <div>
    <ShopPopover title="" trigger="click">
      <template #trigger>
        <ShopBadge dot>
          <ShopIconify
            icon="mdi:bell-outline"
            hoverPointer
            hoverColor="rgb(208,58,82)"
            :color="iconColor"
          />
        </ShopBadge>
      </template>
      <ShopTabs
        class="w-60"
        animated
        type="line"
        justify-content="space-evenly"
      >
        <ShopTabPane
          v-for="item in listData"
          :key="item.key"
          :name="item.key"
          :tab="`${item.name}(${item.list.length})`"
        >
          <NoticeList :list="item.list" @title-click="onNoticeClick" />
        </ShopTabPane>
      </ShopTabs>
    </ShopPopover>
  </div>
</template>

<style lang="less">
.Shop-header-notify {
  padding: 0 10px;
}
</style>
