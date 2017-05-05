/**
 * Created by caiguoqing on 2017/5/5.
 */

import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';

import { ListComponent } from './list/list.component'
import { SharedModule } from '../shared/shared.module'

const editRouter:Routes = [
  {path:'',component: ListComponent},
];


@NgModule({
  declarations:[
    ListComponent,
  ],
  imports:[
    RouterModule.forChild(editRouter),
    SharedModule,
  ],

})

export class EditModule{}
