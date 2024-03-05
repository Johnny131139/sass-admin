<script lang="ts" setup>
import { useTable } from '@shoptop/design'
import { refundTimeTableSchema, refundTimeTableData } from './data'

const [registerTimeTable] = useTable({
  title: '退货进度',
  columns: refundTimeTableSchema,
  pagination: false,
  data: refundTimeTableData,
  align: 'center',
})
</script>

<template>
  <ShopCard title="单号：234231029431">
    <template #header-extra>
      <Shop-space>
        <Shop-button> 操作一 </Shop-button>
        <Shop-button> 操作二 </Shop-button>
        <Shop-button type="primary"> 主操作 </Shop-button>
      </Shop-space>
    </template>

    <Shop-tabs type="line" animated>
      <Shop-tab-pane name="详情" tab="详情"> </Shop-tab-pane>
      <Shop-tab-pane name="规则" tab="规则"> </Shop-tab-pane>
    </Shop-tabs>

    <ShopDesc size="small" :column="2" labelPlacement="left">
      <ShopDescItem label="创建人"> 曲丽丽 </ShopDescItem>
      <ShopDescItem label="订购产品"> XX 服务 </ShopDescItem>
      <ShopDescItem label="创建时间"> 2017-01-10 </ShopDescItem>
      <ShopDescItem label="关联单据">
        <a>12421</a>
      </ShopDescItem>
      <ShopDescItem label="生效日期"> 2017-07-07 ~ 2017-08-08 </ShopDescItem>
      <ShopDescItem label="备注"> 请于两个工作日内确认 </ShopDescItem>
    </ShopDesc>
    <ShopCard title="流程进度" :bordered="false">
      <ShopSteps :current="2" size="small">
        <ShopStep
          title="创建项目"
          description="Shop agreed at 2016-12-12 12:32"
        />
        <ShopStep title="部门初审" description="Chad" />
        <ShopStep title="财务复核" />
        <ShopStep title="完成" />
      </ShopSteps>
    </ShopCard>

    <ShopCard title="用户信息">
      <ShopDesc :column="3" labelPlacement="left">
        <ShopDescItem label="用户姓名"> 付小小 </ShopDescItem>
        <ShopDescItem label="会员卡号"> XX 32943898021309809423 </ShopDescItem>
        <ShopDescItem label="身份证"> 3321944288191034921 </ShopDescItem>
        <ShopDescItem label="联系方式"> 18112345678 </ShopDescItem>
        <ShopDescItem label="联系地址" :span="2">
          曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口
        </ShopDescItem>
      </ShopDesc>
    </ShopCard>
    <ShopCard title="信息组">
      <ShopDesc :column="3" labelPlacement="left">
        <ShopDescItem label="某某数据"> 111 </ShopDescItem>
        <ShopDescItem label="该数据更新时间"> 2017-08-08 </ShopDescItem>
        <ShopDescItem label="某某数据"> 725 </ShopDescItem>
        <ShopDescItem label="该数据更新时间"> 2017-08-08 </ShopDescItem>
      </ShopDesc>
    </ShopCard>

    <ShopCard title="多层级信息组">
      <ShopDesc title="组名称" :column="3" labelPlacement="left">
        <ShopDescItem label="负责人"> 林东东 </ShopDescItem>
        <ShopDescItem label="角色码"> 1234567 </ShopDescItem>
        <ShopDescItem label="所属部门"> XX公司 - YY部 </ShopDescItem>
        <ShopDescItem label="过期时间"> 2017-08-08 </ShopDescItem>
        <ShopDescItem label="描述" :span="2">
          这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...
        </ShopDescItem>
      </ShopDesc>
      <ShopDivider />
      <ShopDesc title="组名称" :column="1" labelPlacement="left">
        <ShopDescItem label="学名">
          Citrullus lanatus (Thunb.) Matsum. et
          Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..
        </ShopDescItem>
      </ShopDesc>
      <ShopDivider />
      <ShopDesc title="组名称" :column="1" labelPlacement="left">
        <ShopDescItem label="负责人"> 付小小 </ShopDescItem>
        <ShopDescItem label="角色码"> 1234568 </ShopDescItem>
      </ShopDesc>
    </ShopCard>
    <ShopCard title="用户近半年来电记录" class="my-5">
      <ShopEmpty />
    </ShopCard>

    <ShopTable @register="registerTimeTable">
      <template #t3_default="{ row }">
        <ShopBadge type="success" dot />
        <span class="ml-2">{{ row.t3 }}</span>
      </template>
    </ShopTable>
  </ShopCard>
</template>
