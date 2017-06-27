import Carousel from '../views/carousel/index'
import Game2048 from '../views/2048/index'
import FormItem from '../views/formItem/index'

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
    path: '/formItem',
    name: '表单控件',
    component: FormItem
  }
]

export default routes
