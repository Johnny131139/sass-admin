<script lang="ts" setup>
import { useAppTheme } from '@shoptop/hooks'
const { isDark, toggleTheme } = useAppTheme()
</script>

<template>
  <ShopSpace justify="center">
    <ShopSwitch :value="isDark" @update:value="toggleTheme">
      <template #checked-icon>
        <ShopIconify icon="emojione:crescent-moon" hoverPointer />
      </template>
      <template #unchecked-icon>
        <ShopIconify icon="emojione:sun-with-face" hoverPointer />
      </template>
    </ShopSwitch>
  </ShopSpace>
</template>
