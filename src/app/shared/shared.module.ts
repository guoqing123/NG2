/**
 * Created by caiguoqing on 2017/5/5.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import NgSelectComponent  from './ng-select/ng-select.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations:[
    NgSelectComponent,
    TitleComponent,

  ],
  exports:[
    NgSelectComponent,
    TitleComponent
  ],
  imports:[
    CommonModule,
  ]
})

export class SharedModule{}
