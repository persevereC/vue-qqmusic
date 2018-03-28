import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/Recommend'
import TopList from '@/components/TopList'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/toplist',
      name: 'TopList',
      component: TopList
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
