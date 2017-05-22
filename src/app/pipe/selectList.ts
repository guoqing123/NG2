/**
 * Created by caiguoqing on 2017/5/15.
 */

import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name:'selectList',pure:false})
export class selectList implements PipeTransform{
  transform(val ,prefix:string){

    return val.filter(contact => contact.name.match("^" + prefix))

  }
}
