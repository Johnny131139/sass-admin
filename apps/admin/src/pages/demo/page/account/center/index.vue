<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/store/user'
import headerImg from '@/assets/images/header.jpg'
import { tags, teams, details, achieveList } from './data'
import Article from './Article.vue'
import Application from './Application.vue'
import Project from './Project.vue'
const userStore = useUserStore()
const prefixCls = 'account-center'
const avatar = computed(() => userStore.getUserInfo.avatar || headerImg)
const tabs = {
  Article,
  Application,
  Project,
}
const cardStyle = {
  paddingBottom: '10px',
}
</script>
<template>
  <div :class="prefixCls" class="m-5">
    <ShopGrid x-gap="12" :cols="3">
      <ShopGridItem>
        <ShopCard :class="`${prefixCls}-card`">
          <ShopGrid x-gap="12" :cols="3">
            <ShopGridItem span="1">
              <div :class="`${prefixCls}-top__avatar`">
                <img width="70" :src="avatar" />
                <span>Shop</span>
                <div class="overflow-hidden">
                  海纳百川，有容乃大。海纳百川，有容乃大。 海纳百川，有容乃大。
                </div>
              </div>
            </ShopGridItem>
            <ShopGridItem span="2">
              <div :class="`${prefixCls}-top__detail`">
                <template v-for="detail in details" :key="detail.title">
                  <p class="flex items-center">
                    <ShopIconify :icon="detail.icon" size="18" />
                    <ShopText class="ml-2" depth="4">{{
                      detail.title
                    }}</ShopText>
                  </p>
                </template>
              </div>
            </ShopGridItem>
          </ShopGrid>
        </ShopCard>
      </ShopGridItem>
      <ShopGridItem>
        <ShopCard
          title="标签"
          :class="`${prefixCls}-card`"
          :header-style="cardStyle"
        >
          <template v-for="tag in tags" :key="tag">
            <ShopTag class="m-1">
              {{ tag }}
            </ShopTag>
          </template>
        </ShopCard>
      </ShopGridItem>
      <ShopGridItem>
        <ShopCard
          title="团队"
          :class="`${prefixCls}-card`"
          :header-style="cardStyle"
        >
          <div
            v-for="(team, index) in teams"
            :key="index"
            :class="`${prefixCls}-top__team`"
          >
            <div :class="`${prefixCls}-top__team-item`">
              <ShopIconify :icon="team.icon" :color="team.color" />
              <ShopText>{{ team.title }}</ShopText>
            </div>
          </div>
        </ShopCard>
      </ShopGridItem>
    </ShopGrid>
    <div :class="`${prefixCls}-bottom`">
      <ShopCard>
        <ShopTabs type="line">
          <ShopTabPane
            v-for="item in achieveList"
            :key="item.key"
            :name="item.name"
          >
            <component :is="tabs[item.component]" />
          </ShopTabPane>
        </ShopTabs>
      </ShopCard>
    </div>
  </div>
</template>

<style lang="less" scoped>
.overflow-hidden {
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.account-center {
  &-col:not(:last-child) {
    padding: 0 10px;

    &:not(:last-child) {
      border-right: 1px dashed rgb(206 206 206 / 50%);
    }
  }
  &-card {
    height: 180px;
    overflow: hidden;
    background-color: var(--component-background-color);
  }
  &-top {
    margin: 16px 16px 12px;
    padding: 10px;
    border-radius: 3px;
    background-color: var(--component-background-color);

    &__avatar {
      text-align: center;

      img {
        margin: auto;
        border-radius: 50%;
      }

      span {
        display: block;
        font-size: 20px;
        font-weight: 500;
      }

      div {
        font-size: 12px;
      }
    }

    &__detail {
      padding-left: 20px;
    }

    &__team {
      display: inline-block;
      padding: 4px 24px;
      &-item {
        display: flex;
        align-items: center;
        span {
          margin-left: 3px;
        }
      }
    }
  }

  &-bottom {
    padding: 10px 0;
    border-radius: 3px;
    background-color: var(--component-background-color);
  }
}
</style>
