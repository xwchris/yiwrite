import { FC } from 'react'
import { PathRouteProps } from 'react-router-dom'
import asyncComponentLoader from 'utils/loader'

enum Pages {
  Home,
  TodoList,
  NotFound
}

type PathRouteCustomProps = {
  title?: string
  component: FC
  // icon?: FC<SvgIconProps>
}

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>

const routes: Routes = {
  [Pages.Home]: {
    component: asyncComponentLoader(() => import('pages/Home')),
    path: '/',
    title: 'Welcome'
    // icon: HomeIcon
  },
  [Pages.TodoList]: {
    component: asyncComponentLoader(() => import('pages/TodoList')),
    path: '/todo-list',
    title: 'TodoList'
    // icon: HomeIcon
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('pages/NotFound')),
    path: '*'
  }
}

export default routes
