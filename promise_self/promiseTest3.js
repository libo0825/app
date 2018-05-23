// 在第一个promise成功函数中返回第二个promise函数
function promiseTest(fn){
	// resolve成功函数
	var resolveFn=function(data){
		
		var TestPM=null  //保存每次成功函数的返回值
		var count=0      //纪录then函数成功执行的次数
		
		// 递归执行回掉函数
		function run(i){
			// console.log(i)
			var num=CallbackArr.length
			// 检测当前的返回值是否属于promiseTest类
			if(TestPM instanceof promiseTest){
				TestPM.then(CallbackArr[i].okCB,CallbackArr[i].errCB)
				// CallbackArr=CallbackArr.splice(i,1)
				// 检测当前是否有返回值
			}else if(TestPM){
				
				CallbackArr[i].okCB(TestPM)
				// CallbackArr=CallbackArr.splice(i,1)
				// 进行正常的执行
			}else{
				TestPM=CallbackArr[i].okCB(data)
			}
			count++
			if(count<num){
				// console.log(count,num)
				run(count)
			}
			
		}
		run(count)
	}
	// reject失败函数
	var rejectFn=function(err){
		
	}
	// then函数的存储
	var CallbackArr=[]
	this.then=function(okCallback,errCallback){
		var watch={
			okCB:okCallback,
			errCB:errCallback
		}
		CallbackArr.push(watch)
		//then函数返回当前的promise对象
		return this
	}

	// promise函数进行实例化时出入的参数
	fn(resolveFn,rejectFn)
}



new promiseTest(function(resolve,reject){
		setTimeout(function(){
			// reject("err")
			resolve("one")
		},2000)
}).then(function(data){
		console.log(data)
		return new promiseTest(function(resolve,reject){
			setTimeout(function(){
					resolve("成功了")
			},0)
		})
},function(err){
	console.log(err)
}).then(function(data){
	console.log(data)
	return 1234
},function(err){
	console.log(err)
}).then(function(data){
	console.log(data)
})

