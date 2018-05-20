import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import list from './data'
const mock=new MockAdapter(axios)
mock.onPost('/mock').reply((config)=>{
	return new Promise((resolve,reject)=>{
		resolve([200,list])
	})
})

