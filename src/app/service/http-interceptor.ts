/**
 * Created by caiguoqing on 2017/5/23.
 */

import { Injectable } from '@angular/core';
import { Request , Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor{


  beforeRequest(request:Request):Request{
    //请求发出前的处理逻辑
    $('#loadding').removeClass('hidden').addClass('show')
    console.log(request,'request');
    return request;
  }

  afterResponse(res:Observable<Response>):Observable<any>{
    //响应请求后的处理逻辑
    res.subscribe(
      data => console.log(data,'response')
    );

    $('#loadding').removeClass('show').addClass('hidden')


    return res
  }
}
