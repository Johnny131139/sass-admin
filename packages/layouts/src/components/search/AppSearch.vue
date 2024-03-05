<script lang="ts" setup>
import { useI18n } from '@shoptop/locale'
import { ref } from 'vue'
import AppSearchModal from './AppSearchModal.vue'

const { t } = useI18n()
const showModal = ref(false)

function changeModal(show: boolean) {
  showModal.value = show
}
</script>

<template>
  <div class="flex items-center" @click="changeModal(true)">
    <ShopPopover placement="bottom">
      <template #trigger>
        <ShopIconify icon="ant-design:search-outlined" hoverPointer />
      </template>
      {{ t('common.searchText') }}
    </ShopPopover>
    <AppSearchModal @close="changeModal(false)" :visible="showModal" />
  </div>
</template>
