<template>
  <column-list :list="list"></column-list>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'

const testData: ColumnProps[] = [
  {
    _id: 1,
    description: 'Test专栏',
    title: '这是专栏描述1',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
  },
  {
    _id: 2,
    description: 'Test专栏2',
    title: '这是专栏描述2',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
  },
  {
    _id: 3,
    description: 'Test专栏3',
    title: '这是专栏描述3',
    avatar: '',
  },
  {
    _id: 4,
    description: 'Test专栏4',
    title: '这是专栏描述4',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
  },
]

export default defineComponent({
  components: {
    ColumnList,
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const list = computed(() => store.getters.getColumns)

    return {
      testData,
      list,
    }
  },
})
</script>

<style>
</style>
