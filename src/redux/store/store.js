import {createStore} from 'redux'
import CountReducer from '../reducers/CountReducer.js'

const store = createStore(CountReducer)

export default store