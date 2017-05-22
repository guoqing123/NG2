import {Injectable} from "@angular/core";
/**
 * Created by caiguoqing on 2017/5/12.
 */
@Injectable()
export class ListData{
  constructor(){}
  Data(){
    return [
      {id:1,name:'张三',age:20,professional:'学生'},
      {id:2,name:'李四',age:20,professional:'学生'},
      {id:3,name:'王二麻子',age:20,professional:'学生'},
      {id:4,name:'小淘气',age:20,professional:'学生'},
    ]
  }
}
