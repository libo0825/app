import {createStore,combineReducers} from 'redux'
import Me from './Me'
import Mine from './Mine'
import Home from './Home'
import Car from './Car'

const reducer=combineReducers({
	Me,
	Mine,
	Home,
	Car
})

export default createStore(reducer)
