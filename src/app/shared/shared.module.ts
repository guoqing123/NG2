/**
 * Created by caiguoqing on 2017/5/5.
 */

import { NgModule } from '@angular/core';

import { NgSelectComponent } from './ng-select/ng-select.component';

@NgModule({
  declarations:[
    NgSelectComponent,
  ],
  exports:[
    NgSelectComponent,
  ]
})

export class SharedModule{}
