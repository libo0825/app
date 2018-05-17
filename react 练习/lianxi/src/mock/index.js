import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import list from './mock'
const mock=new MockAdapter(axios)
mock.onGet('/api/list').reply((config)=>{
	return new Promise((resolve,reject)=>{
		resolve([200,list])
	})
})

