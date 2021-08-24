import selectedReducer from './selected';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    selected: selectedReducer
})

export default allReducers
