import { createAction, handleActions } from 'redux-actions'

const initialState = {
  activeTile: null,
}

export const setActive = createAction('SET_ACTIVE_TILE')

export default handleActions(
  {
    SET_ACTIVE_TILE: (state, { payload: activeTile }) => ({ ...state, activeTile }),
  },
  initialState,
)
