/**
 * Created by caiguoqing on 2017/5/23.
 */

import { Injectable } from '@angular/core';
import { ConnectionBackend , XHRConnection , XHRBackend , Request } from '@angular/http';
import { HttpInterceptor } from './http-interceptor';

@Injectable()

export class HttpInterceptorBackend implements ConnectionBackend{

  constructor(private _httpInterceptor:HttpInterceptor , private _xhrBackend:XHRBackend){}

  createConnection(request:Request):XHRConnection{
    let interceptor = this._httpInterceptor;

    //在请求发出之前，拦截请求并调用 HttpInterceptor 对象的 beforeRequest() 方法进行处理

    let req = interceptor.beforeRequest ? interceptor.beforeRequest(request):request;

    //通过 XHRBackend 对象创建 XHRConnection 实例

    let result = this._xhrBackend.createConnection(req)

    //在得到响应后，拦截并调用 HttpInterceptor 对象的 afterResponse 方法进行处理

    result.response = interceptor.afterResponse ? interceptor.afterResponse(result.response):result.response;

    return result;
  }
}
