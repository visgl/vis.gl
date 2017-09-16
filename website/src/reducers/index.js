import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import ui from 'reducers/ui'
import vis from 'reducers/vis'
import github from 'reducers/github'

export default combineReducers({
  router,

  ui,
  vis,
  github,
})
