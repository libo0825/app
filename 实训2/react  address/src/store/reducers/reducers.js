import { combineReducers } from "redux"
import city from "./city"
import car from "./car"
import topCity from "./topCity"


let reducers = combineReducers({
    city,
    topCity,
    car
})

export default reducers
