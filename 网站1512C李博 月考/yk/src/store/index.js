import {createStore,combineReducers} from 'redux'
import Home from './Home'
import Shopcar from './Shopcar'
import Me from './Me'
const reducers=combineReducers({
	Home,
	Me,
	Shopcar
})
export default createStore(reducers)