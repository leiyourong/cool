import Carousel from '../views/carousel/index'
import SlideEvent from '../views/slideEvent/index'

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
  }
]

export default routes
