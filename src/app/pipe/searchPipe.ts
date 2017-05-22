/**
 * Created by caiguoqing on 2017/5/15.
 */


import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name:'Search',})

export class Search implements PipeTransform{
  transform(val,select){
    return val.filter(val => val.name.match(select))
  }
}
