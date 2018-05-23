// import 'zone.js/dist/zone.js'
// import 'rxjs/bundles/Rx.min.js'
// import '@angular/core/bundles/core.umd.js'
// import '@angular/common/bundles/common.umd.js'
// import '@angular/compiler/bundles/compiler.umd.js'
// import '@angular/platform-browser/bundles/platform-browser.umd.js'
// import '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js'


// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {AppModule} from './components/app.module';

// document.addEventListener('DOMContentLoaded', () => {
//     platformBrowserDynamic().bootstrapModule(AppModule);
// });

import './polyfills'  //对于es6支持的接口注册
import '@angular/core/bundles/core.umd.js'
import '@angular/common/bundles/common.umd.js'
import '@angular/compiler/bundles/compiler.umd.js'
import '@angular/platform-browser/bundles/platform-browser.umd.js'
import '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js'


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './modules/app/app.module';

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic().bootstrapModule(AppModule);
});
