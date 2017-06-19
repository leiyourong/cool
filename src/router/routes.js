import Carousel from '../views/carousel/index'
import SlideEvent from '../views/slideEvent/index'
import Select from '../views/select/index'

var routes = [
  {
    path: '/carousel',
    name: '轮播图',
    component: Carousel
  },
  {
    path: '/slideEvent',
    name: '滑动事件测试',
    component: SlideEvent
  },
  {
    path: '/select',
    name: '三级级联下拉',
    component: Select
  }
]

export default routes
