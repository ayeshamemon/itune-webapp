import { createReducer } from 'reduxsauce'
import Types from './actionTypes'

 
// the initial state of this reducer
export const INITIAL_STATE = { error: false, songs: null }
 
// the eagle has landed
export const search_succeeded = (state = INITIAL_STATE, action) => {
  return { ...state, songs: action.songs, error: false,  loading: false }
}
 
// uh oh
export const search_failed = (state = INITIAL_STATE, action) => {
  return { ...state, error: true, loading: false, songs: [] }
}
 
// uh oh
export const begin_searching = (state = INITIAL_STATE, action) => {
  return { ...state, loading: true }
}
 
// map our action types to our reducer functions
export const HANDLERS = {
  [Types.SEARCH_SUCCEEDED]: search_succeeded,
  [Types.SEARCH_FAILED]: search_failed,
  [Types.SEARCH_REQUESTED]: begin_searching
}
 
export default createReducer(INITIAL_STATE, HANDLERS)