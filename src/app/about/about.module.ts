/**
 * Created by caiguoqing on 2017/5/5.
 */

import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AccordionModule } from 'ng2-bootstrap/accordion';


import { AboutComponent } from './help/about.component'

//依赖的模块
import { SharedModule } from '../shared/shared.module'

const aboutRouter:Routes = [
  {path:'' ,component:AboutComponent},
];


@NgModule({
  imports:[
    RouterModule.forChild(aboutRouter),
    AccordionModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    AboutComponent,
  ],
})

export class AboutModule{

}
