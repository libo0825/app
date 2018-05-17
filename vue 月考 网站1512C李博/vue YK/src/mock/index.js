import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import list from './data.js'

const mock=new MockAdapter(axios)
mock.onGet('/mock').reply((config)=>{
	return new Promise((resolve,reject)=>{
		resolve([200,list])
	})
})

