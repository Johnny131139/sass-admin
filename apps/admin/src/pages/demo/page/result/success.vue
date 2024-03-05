<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons-vue'

const currentStatus = ref('process')
const current = ref<number | null>(1)
const next = () => {
  if (current.value === null) current.value = 1
  else if (current.value >= 4) current.value = null
  else current.value++
}
const prev = () => {
  if (current.value === 0) current.value = null
  else if (current.value === null) current.value = 4
  else current.value--
}
</script>

<template>
  <div class="m-5 result-success">
    <ShopResult
      status="success"
      title="提交成功"
      description="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
    >
      <template #footer>
        <ShopSpace justify="center">
          <ShopButton key="console" type="primary"> 返回列表 </ShopButton>
          <ShopButton key="buy"> 查看项目 </ShopButton>
          <ShopButton key="buy"> 打印 </ShopButton>
        </ShopSpace>
      </template>
    </ShopResult>
    <div class="result-success__content">
      <ShopSpace vertical>
        <ShopDescriptions label-placement="left" title="项目名称">
          <ShopDescriptionsItem label="项目 ID"> 111222 </ShopDescriptionsItem>
          <ShopDescriptionsItem label="负责人"> Shop </ShopDescriptionsItem>
          <ShopDescriptionsItem label="生效时间">
            2016-12-12 ~ 2017-12-12
          </ShopDescriptionsItem>
        </ShopDescriptions>
        <ShopSteps :current="current" :status="currentStatus">
          <ShopStep title="创建项目">
            <template #default>
              <div>Shop</div>
              <p>2016-12-12 12:32</p>
            </template>
          </ShopStep>
          <ShopStep title="部门初审" description="Chad" />
          <ShopStep title="财务复核" />
          <ShopStep title="完成" />
        </ShopSteps>
        <ShopSpace>
          <ShopButtonGroup>
            <ShopButton @click="prev">
              <template #icon>
                <ShopIcon>
                  <ArrowLeftOutlined />
                </ShopIcon>
              </template>
            </ShopButton>
            <ShopButton @click="next">
              <template #icon>
                <ShopIcon>
                  <ArrowRightOutlined />
                </ShopIcon>
              </template>
            </ShopButton>
          </ShopButtonGroup>
          <ShopRadioGroup v-model:value="currentStatus" name="basic">
            <ShopRadioButton class="status-radio-btn" value="error">
              Error
            </ShopRadioButton>
            <ShopRadioButton class="status-radio-btn" value="process">
              Process
            </ShopRadioButton>
            <ShopRadioButton class="status-radio-btn" value="wait">
              Wait
            </ShopRadioButton>
            <ShopRadioButton class="status-radio-btn" value="finish">
              Finish
            </ShopRadioButton>
          </ShopRadioGroup>
        </ShopSpace>
      </ShopSpace>
    </div>
  </div>
</template>
<style lang="less" scoped>
.result-success {
  padding: 48px 32px;

  &__content {
    margin-top: 24px;
    padding: 24px 40px;
    background-color: #fafafa;
  }
}

.status-radio-btn {
  height: 34px;
  line-height: 34px;
}
</style>
