/**
 * Created by caiguoqing on 2017/5/22.
 */

import {Directive, ElementRef, Input, HostListener} from "@angular/core";
@Directive({
  selector:'[myBeautifulBackground]'
})

export class BeautifulBackgroundDirective{

  private _defaultColor = 'yellow';
  private el:HTMLElement;

  // @Input() set backgroundColor(colorName:string){
  //   this.setStyle(colorName)
  // }
  @Input() backgroundColor:string;

  @HostListener('click') onClick(){
    this.setStyle(this.backgroundColor || this._defaultColor)
  }

  constructor(el:ElementRef){
    this.el = el.nativeElement;
    this.setStyle(this._defaultColor);
  }

  private setStyle(color:string){
    this.el.style.backgroundColor = color;
  }
}
