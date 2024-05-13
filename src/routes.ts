import { FC } from 'react'
import { PathRouteProps } from 'react-router-dom'
import Home from 'pages/Home'

enum Pages {
  Home
}

type PathRouteCustomProps = {
  title?: string
  component: FC
  // icon?: FC<SvgIconProps>
}

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>

const routes: Routes = {
  [Pages.Home]: {
    component: Home,
    path: '/',
    title: 'Welcome'
  }
}

export default routes
