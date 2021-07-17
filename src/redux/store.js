import {createStore} from 'redux'
import {cakeReducer} from '../redux/Cake/CakeReducer'


const store = createStore(cakeReducer)

export default store