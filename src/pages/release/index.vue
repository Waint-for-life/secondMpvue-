<template>
  <div>
    <i-notice-bar icon="remind">
      请在下方先选择将发布需求所属的类型！！(默认家教类)
    </i-notice-bar>
  <!-- <i-button @click="showAllClick">选择将发布的需求所属的类型</i-button> -->
  <router-view>
    <tutor v-if="zero"></tutor>
    <usedBook v-if="one"></usedBook>
    <shareBill v-if="two"></shareBill>
    <idleItem v-if="three"></idleItem>
    <partTimeJob v-if="four"></partTimeJob>
    <renting v-if="five"></renting>
    <travel v-if="six"></travel>
    <technology v-if="seven"></technology>
    <express v-if="eight"></express>
    <competition v-if="nine"></competition>
    <resource v-if="ten"></resource>
    <others v-if="eleven"></others>
  </router-view>
  <view>
  <picker-view @change="showDiff" indicator-style="height: 50px;" style="width: 100%; height: 300px;">
    <picker-view-column>
      <view  class="choiceList">家教类</view>
      <view  class="choiceList">二手书类</view>
      <view  class="choiceList">拼单类</view>
      <view  class="choiceList">闲置物转出</view>
      <view  class="choiceList">兼职类</view>
      <view  class="choiceList">租房及转租</view>
      <view  class="choiceList">旅游类</view>
      <view  class="choiceList">技术处理类</view>
      <view  class="choiceList">代拿快递</view>
      <view  class="choiceList">竞赛组队</view>
      <view  class="choiceList">资源需求</view>
      <view  class="choiceList">其他</view>
    </picker-view-column>
  </picker-view>
  </view>
  </div>
</template>

<script>
import tutor from '@/components/tutor'
import usedBook from '@/components/usedBook'
import shareBill from '@/components/shareBill'
import idleItem from '@/components/idleItem'
import partTimeJob from '@/components/partTimeJob'
import renting from '@/components/renting'
import travel from '@/components/travel'
import technology from '@/components/technology'
import express from '@/components/express'
import competition from '@/components/competition'
import resource from '@/components/resource'
import others from '@/components/others'

export default {
  components: {tutor, usedBook, shareBill, idleItem, partTimeJob, renting, travel, technology, express, competition, resource, others},
  name: 'index.vue',
  data () {
    return {
      zero: true,
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      choice: 13
    }
  },
  methods: {
    showDiff (choiceList) {
      console.log(choiceList.mp.detail.value[0])
      this.choice = choiceList.mp.detail.value[0]
      console.log(this.choice)
    }
  },
  updated () {
    if (this.choice === 0) {
      this.zero = true
      this.one = false
      this.two = false
      this.three = false
      this.four = false
      this.five = false
      this.six = false
      this.seven = false
      this.eight = false
      this.nine = false
      this.ten = false
      this.eleven = false
    }
    if (this.choice === 1) {
      this.zero = false
      this.one = true
      this.two = false
      this.three = false
      this.four = false
      this.five = false
      this.six = false
      this.seven = false
      this.eight = false
      this.nine = false
      this.ten = false
      this.eleven = false
    }
    if (this.choice === 2) {
      this.zero = false
      this.one = false
      this.two = true
      this.three = false
      this.four = false
      this.five = false
      this.six = false
      this.seven = false
      this.eight = false
      this.nine = false
      this.ten = false
      this.eleven = false
    }
    if (this.choice === 3) {
      this.zero = false
      this.one = false
      this.two = false
      this.three = true
      this.four = false
      this.five = false
      this.six = false
      this.seven = false
      this.eight = false
      this.nine = false
      this.ten = false
      this.eleven = false
    }
    if (this.choice === 4) {
      this.zero = false
      this.one = false
      this.two = false
      this.three = false
      this.four = true
      this.five = false
      this.six = false
      this.seven = false
      this.eight = false
      this.nine = false
      this.ten = false
      this.eleven = false
    }
    if (this.choice === 5) {
      this.zero = false
      this.one = false
      this.two = false
      this.three = false
      this.four = false
      this.five = true
      this.six = false
      this.seven = false
      this.eight = false
      this.nine = false
      this.ten = false
      this.eleven = false
    }
    if (this.choice === 6) {
      this.zero = false
      this.one = false
      this.two = false
      this.three = false
      this.four = false
      this.five = false
      this.six = true
      this.seven = false
      this.eight = false
      this.nine = false
      this.ten = false
      this.eleven = false
    }
    if (this.choice === 7) {
      this.zero = false
      this.one = false
      this.two = false
      this.three = false
      this.four = false
      this.five = false
      this.six = false
      this.seven = true
      this.eight = false
      this.nine = false
      this.ten = false
      this.eleven = false
    }
    if (this.choice === 8) {
      this.zero = false
      this.one = false
      this.two = false
      this.three = false
      this.four = false
      this.five = false
      this.six = false
      this.seven = false
      this.eight = true
      this.nine = false
      this.ten = false
      this.eleven = false
    }
    if (this.choice === 9) {
      this.zero = false
      this.one = false
      this.two = false
      this.three = false
      this.four = false
      this.five = false
      this.six = false
      this.seven = false
      this.eight = false
      this.nine = true
      this.ten = false
      this.eleven = false
    }
    if (this.choice === 10) {
      this.zero = false
      this.one = false
      this.two = false
      this.three = false
      this.four = false
      this.five = false
      this.six = false
      this.seven = false
      this.eight = false
      this.nine = false
      this.ten = true
      this.eleven = false
    }
    if (this.choice === 11) {
      this.zero = false
      this.one = false
      this.two = false
      this.three = false
      this.four = false
      this.five = false
      this.six = false
      this.seven = false
      this.eight = false
      this.nine = false
      this.ten = false
      this.eleven = true
    }
  }
}
</script>

<style scoped>
.releaseInfo {
  font-size: 22px;
}
.choiceList {
  line-height: 50px; 
  text-align: center
}
.top {
  height: 200rpx;
}
h2 {
  text-align: center
}
</style>
