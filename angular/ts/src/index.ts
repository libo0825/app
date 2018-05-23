// class Student {
//     firstName : string;
//     lastName : string;

//     constructor(fiestName : string,  lastName : string) {
//         this.firstName = fiestName;
//         this.lastName = lastName;
//     }

//     greeter() {
//         return "Hello，您好" + this.firstName + " " + this.lastName;
//     }
// }

// var user = new Student("王", "小明");
// // document.body.innerHTML = user.greeter();
// document.body.innerHTML = user.greeter();


// let isDone: boolean = true;
// isDone=null

// let str:null=undefined;
// let strs:undefined=null;

// let list: number[] = [1, 2, 3];
// let lists:Array<number>= [1, 2, 3];
// let listss:Array<any>= [1,2,"123456",false,{}];
// let arr:[number,string]=[1,"123"]


// console.log(isDone)

// let x: [string, number];
// console.log(x[0].substr(1));
// x[3] = 'world';  //设置值成功
// // x[6] = true; //设置值失败，这里越界元素会使用联合类型代替；

// enum Color {Red=0, Green, Blue}
// let c: Color = Color.Green;
// console.log(c)
// let colorName: string = Color[2];
// console.log(colorName)

// function aa():void{
//     let a=1
//     // return aa
// }

// console.log(aa())

// function error(message: string): never { throw new Error(message); } 
// error("错误")


// let someValue: any = true; 
// // let strLength: number = (<string>someValue).length;
// // console.log(typeof(someValue as string))
// // console.log(someValue.length)

// let strLength:number = (someValue as string).length;

// console.log(strLength)


// function keepWholeObject(wholeObject: { a: string, b: number }) { 
//     let { a, b = 1001 } = wholeObject; 
//     console.log(a,b)
// }
// keepWholeObject({a:"123",b:122})

// type C = { a: string, b?: number } 

// function f({ a, b }: C): void { 

// }

// interface LabelledValue {
//     readonly a: string;    //定义必填选项，且类型必须为string
//     b?
// }

// let obj:LabelledValue={a:"123"}
// obj.a="12345"

// function f(obj: LabelledValue): any {
//     obj.a="12323"
//     return obj.a
// }   

// console.log(f({a:"123"}))

// let a: number[] = [1, 2, 3, 4]; 

// interface SquareConfig {
    
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }
// function createSquare(config: SquareConfig):any {
//     // ...
// }

// let squareOptions = { colour: "red", width: 100 };
// createSquare(squareOptions )
  
// interface SearchFunc {
//     (source: string, subString: string): boolean;
//   }
//   let aa:SearchFunc
//     aa=function (obj){
//     return false
//   }
  
//   console.log(aa())



// interface StringArray {
//     [index: number]: string;
// }
// let myArray: StringArray;
// myArray = [12345, "Fred"];
 

// interface ClockInterface {
//     currentTime: number;
//     setTime(d:string);
//     // constructor(a:number,b:string):any
// }

// class Clock{
//     currentTime:string
//     setTime(d:string) {
//         this.currentTime = d;
//     }
//     constructor(a:number,b:string) {
//         console.log(this.currentTime)
//     }
//   }
  
//   let aa=new Clock(1,"234")

//   aa.setTime("23456")


// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }

// function getCounter(): Counter {
//     // let counter = <Counter>function (start: number) { };
//     // let counter
//     //  counter.interval = 123;
//     // counter.reset = function () { };
//     return 123;
// }

// let c = getCounter();
// console.log(c)
// console.log(c(10))

// c.reset();

// c.interval = 5.0;
// console.log(c)
  

// class Animal {
//     private name: string;
//     public constructor(theName: string) { this.name = theName; }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
//   }

//   new Animal("lisi").name
// interface Named {
//     name: number;
//   }
  
//   let x: Named;
//   // y's inferred type is { name: string; location: string; }
//   let y = { name: 'Alice', location: 'Seattle' };
//   x = y;
//   console.log(x)
// interface Empty<T> {
// }
// interface Emptys<T> {
// }
// let x: Empty<number>;
// let y: Emptys<string>;

// x = y;  // okay, y matches structure of x


// interface NotEmpty<T> {
//     data: T;
//   }
//   let x: NotEmpty<number>={data:133};
//   let y: NotEmpty<string>={data:"133"};
  
//   x = y;  // error, x and y are not compatible
  
// function f() {
//     console.log("f(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("f(): called");
//     }
// }

// function g() {
//     console.log("g(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("g(): called");
//     }
// }

// function sealed(constructor: Function) {
//     console.log(2222)
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }

// @sealed
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         console.log(1111)
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// new Greeter("haha")


function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
        
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    
    constructor(m: string) {
        console.log(this)
        this.hello = m;
    }
}

console.log(new Greeter("world"));