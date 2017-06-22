import Carousel from '../views/carousel/index'
import Game2048 from '../views/2048/index'
import Select from '../views/select/index'

var routes = [
  {
    path: '/carousel',
    name: '轮播图',
    component: Carousel
  },
  {
    path: '/2048',
    name: '2048小游戏',
    component: Game2048
  },
  {
    path: '/select',
    name: '三级级联下拉',
    component: Select
  }
]

export default routes
