

import {Component,OnInit, Input } from '@angular/core';

// import {NameList} from "./app.service"   //引入的服务
// 元数据
@Component({
    
    selector: "list",
    // template: '<h1> Angular 5 App</h1>',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
    // providers:[NameList]
})

export class ListComponent implements OnInit {
    // name:string
    @Input()parentname:string
    isSpecial:Boolean=true
    list:Array<any>=[]
    constructor(){
        this.list=[1,"1",true]
    }
    ngOnInit() {
        
        // this.name="test one"
    }
    changeHandle(e:any,i:any):void{
        console.log(e,i)
    }
}

