/**
 * Created by caiguoqing on 2017/5/5.
 */
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ListComponent } from './list/list.component'
import { SharedModule } from '../shared/shared.module'
import { Search } from '../pipe/searchPipe'

const editRouter:Routes = [
  {path:'',component: ListComponent},
];


@NgModule({
  declarations:[
    ListComponent,
    Search,
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(editRouter),
    SharedModule,
    FormsModule
  ],

})

export class EditModule{}
