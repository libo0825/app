// 在第一个promise中进行reject，则后续所有的then函数都不在执行和继续执行resolve函数的做法

function promiseTest(initFn){

	// resolve成功函数
	var count=0      //纪录then函数成功执行的次数
	var TestPM=null  //保存每次成功函数的返回值
	var state=true   //如果有一个then函数返回promise，则递归函数不再执行
	var resolveFn=function(data){
		// 递归执行回掉函数
		
		function run(i){
			
			var num=CallbackArr.length
			// 将后续所有的then方法都挂载新的promise上
			var arr=CallbackArr.slice(i)
			// 检测当前的返回值是否属于promiseTest类
			if(TestPM instanceof promiseTest){
				arr.forEach((j)=>{
					TestPM.then(j.okCB,j.errCB)
				})
				
				state=false
				// 检测当前是否有返回值
			}else if(TestPM){
				CallbackArr[i].okCB(TestPM)
				// 进行正常的执行
			}else{

				TestPM=CallbackArr[i].okCB(data)
			}
			count++

				if(count<num&&state){
					// console.log(count,num)
					run(count)
				}
			
		}
		run(count)
		
	}
	
	// reject失败函数
	var rejectFn=function(err){
		// 1、如果有一个reject将会中断代码的执行
		CallbackArr[count].errCB(err)
		// 2、如果捕捉错误，但是不阻断代码的执行,继续执行下一个then方法中的成功函数
		count++
		var num=CallbackArr.length
		if(count<num){
				resolveFn()
		}
		
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
	initFn(resolveFn,rejectFn)
}



new promiseTest(function(resolve,reject){
		setTimeout(function(){
			resolve("成功了1")
			// reject("失败了1")
		},2000)
}).then(function(data){
		console.log(data)
		// console.log(this)
		return new promiseTest(function(resolve,reject){
			setTimeout(function(){
					// resolve("成功了2")
					reject("失败了2")
			},5000)
		})

},function(err){
	console.log(err)


}).then(function(data){
	console.log(data)
	return new promiseTest(function(resolve,reject){
			setTimeout(function(){
					resolve("成功了3")
					// reject("失败了2")
			},3000)
		})
},function(err){
	console.log(err)
})
.then(function(data){
	console.log(data)
	// return 1234
},function(err){
	console.log(err)
}).then((data)=>{
	console.log(data)
})	





var pro1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(1)
	})
})
var pro2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(2)
	},1)
	
})


Promise.race(pro1,pro2).then((data)=>{
	console.log(data+"ok")
},(err)=>{
	console.log(err)
})

console.log("结束了")