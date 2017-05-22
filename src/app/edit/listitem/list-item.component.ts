/**
 * Created by caiguoqing on 2017/5/22.
 */

import {Component, OnInit, Input} from "@angular/core";
import { SharedService } from '../../service/sharedService'
@Component({
  selector:'list-item',
  templateUrl:'./list-item.component.html',
})

export class EditListItem implements OnInit{
  inputText:{} = {name:'zhang',age:20,id:2,professional:'学生'};
  private search:any;

  @Input() ListData:any[] = [];

  constructor(private _sharedService:SharedService){}

  ngOnInit(){
    console.log(this.ListData)
  }

  add(){
    this._sharedService.sppend(this.inputText)
  }

}
