/**
 * Created by caiguoqing on 2017/5/23.
 */

import {Http, Response, Headers,RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService{

  constructor(private _http:Http){}

  getContacts(target):Observable<any[]>{
    return this._http.get(target)
      .map(this.extractData)
      .catch(this.handleError)
  }

  addContacts(target,contact){
    let body = JSON.stringify(contact);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});

    return this._http.post(target,body,options)
      .map(this.extractData)
      .catch(this.handleError)

  }

  private extractData(res:Response){
    let body = res.json();
    return body.data || {}
  }

  private handleError(error:any){
    let errMsg = (error.message) ? error.message:
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
