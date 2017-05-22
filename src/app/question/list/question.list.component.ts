/**
 * Created by caiguoqing on 2017/5/10.
 */

import {Component, OnInit} from "@angular/core";
@Component({
  selector:'question-list-component',
  templateUrl:'question.list.component.html',
  styleUrls:['question.list.component.css'],
})

export class QuestionListComponent implements OnInit{

  public curContact:any = {};
  public contacts:Array<any> = [];

  constructor(){}
  ngOnInit(){

  }


  submit(contactForm){

    this.contacts.push({name:contactForm.value.contactName,telNum:contactForm.value.telNum})

  }

  changeVal(status){
    status.blur = true
  }

  focus(status){
    status.blur = false
  }


}
