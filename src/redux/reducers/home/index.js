import {createReducer} from 'utils/createReducer'
import ACTION_HANLDERS from 'actions/home'
let initState ={
}

export const key = 'home'
export default createReducer(initState, ACTION_HANLDERS)