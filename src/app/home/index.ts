import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home, Yolo } from './home';
import { CommonModule } from '@angular/common';

export const ROUTER_CONFIG = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'yolo', component: Yolo },
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Yolo,
    Home
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
})
export default class HomeModule {
}

