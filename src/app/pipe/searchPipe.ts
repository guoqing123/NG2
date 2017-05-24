/**
 * Created by caiguoqing on 2017/5/15.
 */


import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name:'Search',pure:false})

export class Search implements PipeTransform{
  transform(val,select){
    return val.filter((val) => {
      return val.name.match(select)
      // val.name.match(select)
    })
  }
}
