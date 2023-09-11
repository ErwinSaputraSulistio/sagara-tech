import {
  Task,
  NotFound 
} from '../../pages'

const appRoutes = [
  {
    id: 1,
    path: '/',
    component: <Task/>
  },
  {
    id: 0,
    path: '*',
    component: <NotFound/>
  }
]

export default appRoutes