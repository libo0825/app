// 简单实现
function promiseTest(fn){
	var resolveFn=function(data){
		okCallbackFn(data)
	}
	var rejectFn=function(err){
		errCallbackFn(err)
	}
	var okCallbackFn,errCallbackFn
	this.then=function(okCallback,errCallback){
		okCallbackFn=okCallback
		errCallbackFn=errCallback
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
})
