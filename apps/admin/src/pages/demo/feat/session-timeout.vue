<script lang="ts" setup>
import { useUserStore } from '@/store/user'
import { sessionTimeoutApi, tokenExpiredApi } from '@/apis/demo/account'

defineOptions({ name: 'TestSessionTimeout' })

const userStore = useUserStore()
async function test1() {
  // 示例网站生产环境用的是mock数据，不能返回Http状态码，
  // 所以在生产环境直接改变状态来达到测试效果
  if (import.meta.env.PROD) {
    userStore.setAccessToken(undefined)
    userStore.setSessionTimeout(true)
  } else {
    // 这个api会返回状态码为401的响应
    await sessionTimeoutApi()
  }
}

async function test2() {
  // 这个api会返回code为401的json数据，Http状态码为200
  try {
    await tokenExpiredApi()
  } catch (err) {
    console.log('接口访问错误：', (err as Error).message || '错误')
  }
}
</script>

<template>
  <ShopCard title="登录过期示例">
    <ShopAlert title="模式：ROUTE_JUMP(默认模式) / PAGE_COVERAGE" type="info">
      可以在项目配置中设置模式。PAGE_COVERAGE模式直接生成页面覆盖当前页面，方便保持过期前的用户状态！
    </ShopAlert>

    <ShopCard title="请点击下面的按钮访问测试接口" class="mt-4">
      <template #header-extra> 所访问的接口会返回Token过期响应 </template>

      <ShopGrid x-gap="12" :cols="2">
        <ShopGridItem>
          <ShopCard hoverable content-style="text-align: center">
            <ShopButton type="primary" @click="test1">
              HttpStatus == 401
            </ShopButton>
          </ShopCard>
        </ShopGridItem>
        <ShopGridItem>
          <ShopCard hoverable content-style="text-align: center">
            <ShopButton type="primary" @click="test2">
              Response.code == 401
            </ShopButton>
          </ShopCard>
        </ShopGridItem>
      </ShopGrid>
    </ShopCard>
  </ShopCard>
</template>
