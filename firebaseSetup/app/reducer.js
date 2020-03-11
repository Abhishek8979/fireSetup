import add_user from './screens/user/reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    add_user,
})

export default rootReducer