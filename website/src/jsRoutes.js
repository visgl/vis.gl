import About from 'components/About'
import Blog from 'components/Blog'

export default [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/blog',
    exact: true,
    component: Blog,
  },
  {
    path: '/blog/:name',
    component: Blog,
  },
]
