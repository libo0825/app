import axios from "axios"
import axiosMockAdapter from "axios-mock-adapter"
import cityArr from "./data/city"
import car from "./data/carClass"
import { provinceArr, citys } from "./data/provinceCity"

let mock = new axiosMockAdapter(axios)

let data = () => {
    mock.onGet("/api/city")
        .reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, cityArr])
            })
        })
    mock.onGet("/api/topCity")
        .reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, [provinceArr, citys]])
            })
        })
    mock.onGet("/api/car")
        .reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, car])
            })
        })

}

export default data