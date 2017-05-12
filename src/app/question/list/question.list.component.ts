/**
 * Created by caiguoqing on 2017/5/10.
 */

import {Component, OnInit, Input} from "@angular/core";
@Component({
  selector:'question-list-component',
  templateUrl:'question.list.component.html',
})

export class QuestionListComponent implements OnInit{

  @Input() contact:any;


  constructor(){}
  ngOnInit(){

  }

  conllect(){
    alert()
  }

}
