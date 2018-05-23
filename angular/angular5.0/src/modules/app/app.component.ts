// import {Component} from '@angular/core';

// class AppComponent {
//     static get annotations() {
//         return [
//             new Component({
//                 selector: "my-app",
//                 template: '<h1>My First Angular 5 App</h1>'
//             }),
//         ];
//     }
    
//     constructor () {}
// }

// export {AppComponent};


import {Component,OnInit } from '@angular/core';

// import {NameList} from "./app.service"   //引入的服务
// 元数据
@Component({
    
    selector: "my-app",
    // template: '<h1> Angular 5 App</h1>',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
    // providers:[NameList]
})

export class AppComponent implements OnInit {
    name:string;
    ngOnInit(){
        this.name="app"
    }
}

