<script lang="ts" setup>
import { h, nextTick, ref } from 'vue'
import { Icon } from '@shoptop/components/index'
import { useMsg } from '@shoptop/design'

const msg = useMsg()

const renderIcon = (icon: string) => {
  return () => h(Icon, { class: 'mr-2', icon })
}

const x = ref(0)
const y = ref(0)
const showDropdown = ref(false)
const options = [
  {
    key: 'New',
    label: 'New',
    icon: renderIcon('bi:plus'),
    children: [
      {
        key: 'New1-1',
        label: 'New1-1',
        icon: renderIcon('bi:plus'),
        children: [
          { key: 'New1-1-1', label: 'New1-1-1' },
          { key: 'New1-2-1', label: 'New1-2-1', disabled: true },
        ],
      },
      { key: 'New1-2', label: 'New1-2', icon: renderIcon('bi:plus') },
    ],
  },
]

const handleSelect = (key: string | number) => {
  showDropdown.value = false
  msg.info(String(key))
}
const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault()
  showDropdown.value = false
  nextTick().then(() => {
    showDropdown.value = true
    x.value = e.clientX
    y.value = e.clientY
  })
}
const onClickoutside = () => {
  msg.info('clickoutside')
  showDropdown.value = false
}
</script>

<template>
  <ShopCard title="右键菜单示例">
    <ShopCard title="Simple">
      <ShopButton type="primary" @contextmenu="handleContextMenu">
        Right Click on me
      </ShopButton>
      <ShopDropdown
        placement="bottom-start"
        trigger="manual"
        :x="x"
        :y="y"
        :options="options"
        :show="showDropdown"
        :on-clickoutside="onClickoutside"
        @select="handleSelect"
      />
    </ShopCard>
  </ShopCard>
</template>
