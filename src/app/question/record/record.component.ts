import {Component, OnInit, ViewChild} from '@angular/core';
// import { QuestionListComponent } from '../list/question.list.component'
import { HttpService } from '../../service/httpGetService';
@Component({
  selector: 'app-record',
  templateUrl: 'record.component.html',
  styleUrls: ['record.component.css'],
  providers:[HttpService],
})
export class RecordComponent implements OnInit {

  private contacts:any;
  private errorMessage:any;
  // @ViewChild(QuestionListComponent) contactCollect:QuestionListComponent;

  constructor(
    private _httpService:HttpService
  ) {

  }

  ngOnInit() {
    // this.getContacts()
  }

  getContacts(){
    let target = `./app/contact.json`;
    return this._httpService.getContacts(target)
      .subscribe(
        contacts =>{
          this.contacts = contacts;
          // console.log(this.contacts)
        },
        error => this.errorMessage = <any>error
      )
  }

  sendData(){
    let target = `./app/contact.json`;
    let contact = {"name":"张三"};
    this._httpService.addContacts(target,contact)
      .subscribe(
        contact => this.contacts.push(contact),
        error => this.errorMessage = <any>error
      )
  }

}
