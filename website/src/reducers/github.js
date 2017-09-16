import { createAction, handleActions } from 'redux-actions'

const initialState = {}

export const projectFetched = createAction('PROJECT_FETCHED')

export default handleActions(
  {
    PROJECT_FETCHED: (state, { payload: repo }) => ({ ...state, [repo.name]: repo }),
  },
  initialState,
)
