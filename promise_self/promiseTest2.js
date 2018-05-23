// 加入链式的promise
function promiseTest(fn){
	var resolveFn=function(data){
		okCallbackFn.forEach(function(i){
				i(data)
		})
	}
	var rejectFn=function(err){
		errCallbackFn.forEach(function(i){
				i(err)
		})
	}
	var okCallbackFn=[],errCallbackFn=[]
	this.then=function(okCallback,errCallback){
		okCallbackFn.push(okCallback)
		errCallbackFn.push(errCallback)
		//then函数返回当前的promise对象
		return this
	}

	fn(resolveFn,rejectFn)
}

new promiseTest(function(resolve,reject){
		setTimeout(function(){
			reject("err")
		},2000)
}).then(function(data){
		console.log(data)
},function(err){
	console.log(err)
}).then(function(data){
	console.log(data)
},function(err){
	console.log(err)
})