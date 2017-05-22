/**
 * Created by caiguoqing on 2017/5/5.
 */
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ListComponent } from './list/list.component'
import { EditListItem } from './listitem/list-item.component'
import { SharedModule } from '../shared/shared.module'
import { Search } from '../pipe/searchPipe'

import { BeautifulBackgroundDirective } from '../directive/setBackG'
import { SharedService } from '../service/sharedService'

const editRouter:Routes = [
  {path:'',component: ListComponent},
];


@NgModule({
  declarations:[
    ListComponent,
    Search,
    BeautifulBackgroundDirective,
    EditListItem,
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(editRouter),
    SharedModule,
    FormsModule
  ],
  providers:[SharedService,]

})

export class EditModule{}
