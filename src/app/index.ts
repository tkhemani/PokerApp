import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { Store, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import HomeModule from './home';

export const ROUTER_CONFIG = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'about', loadChildren: () => System.import('./+about') },
];

@NgModule({
  providers: [
  ],
  declarations: [
    // Components / Directives/ Pipes
  ],
  imports: [
    RouterModule.forChild(ROUTER_CONFIG),
     StoreModule.provideStore({ counter: counterReducer }, { counter: 0 }),
     // Note that you must instrument after importing StoreModule
     StoreDevtoolsModule.instrumentStore({
       maxAge: 5,
       monitor: counterReducer
     })
  ],
})
export default class AppModule {
  static routes = ROUTER_CONFIG;
}
