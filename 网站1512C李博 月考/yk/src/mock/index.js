import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import list from './mock1'
import list2 from './mock2'
import list3 from './mock3'

const mock=new MockAdapter(axios)
mock.onGet('/list').reply((config)=>{
	return new Promise((resolve,reject)=>{
		resolve([200,list])
	})
})
mock.onGet('/list2').reply((config)=>{
	return new Promise((resolve,reject)=>{
		resolve([200,list2])
	})
})
mock.onGet('/list3').reply((config)=>{
	return new Promise((resolve,reject)=>{
		resolve([200,list3])
	})
})
