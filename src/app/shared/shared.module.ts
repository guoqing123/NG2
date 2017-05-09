/**
 * Created by caiguoqing on 2017/5/5.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import NgSelectComponent  from './ng-select/ng-select.component';

@NgModule({
  declarations:[
    NgSelectComponent,
  ],
  exports:[
    NgSelectComponent,
  ],
  imports:[
    CommonModule,
  ]
})

export class SharedModule{}
