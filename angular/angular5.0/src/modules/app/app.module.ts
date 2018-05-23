import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ListComponent} from './components/list/list.component';

// class AppModule{
//     static get annotations() {
//         return [
//             new NgModule({
//                 imports: [ BrowserModule ],
//                 declarations: [ AppComponent ],
//                   bootstrap: [ AppComponent ]
//             })
//         ];
//     }
// }

// export {AppModule};


@NgModule({
    imports:      [ BrowserModule ],//本模块声明的组件模板需要的类所在的其它模块。
    // providers:    [ Logger ],   //服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
    declarations: [ AppComponent,ListComponent ], // 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
    exports:      [ AppComponent ], //declarations 的子集，可用于其它模块的组件模板。
    bootstrap:    [ AppComponent ]  // 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性
})

class AppModule{}

export {AppModule};

