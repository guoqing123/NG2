/**
 * Created by caiguoqing on 2017/5/22.
 */

import {Directive, ElementRef} from "@angular/core";
@Directive({
  selector:'[myBeautifulBackground]'
})

export class BeautifulBackgroundDirective{
  constructor(el:ElementRef){
    el.nativeElement.style.backgroundColor = 'red';
  }
}
