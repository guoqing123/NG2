/**
 * Created by caiguoqing on 2017/5/4.
 */

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'


export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {path:'home' , component:HomeComponent},
  {path:'about',loadChildren:'app/about/about.module#AboutModule'},
  {path:'edit' , loadChildren:'app/edit/edit.module#EditModule'}
];
