import Image from '../views/image/index'
import Game2048 from '../views/2048/index'
import FormItem from '../views/formItem/index'
import Svg from '../views/svg/index'

var routes = [
  {
    path: '/image',
    name: '图片效果',
    component: Image
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
  },
  {
    path: '/svg',
    name: 'SVG',
    component: Svg
  }
]

export default routes
