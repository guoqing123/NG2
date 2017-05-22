/**
 * Created by caiguoqing on 2017/5/22.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class SharedService{

  list:any[] = [{name:'123',age:20,id:1,professional:'学生'}];

  sppend(str:any){
    this.list.push(str)
  }
}
