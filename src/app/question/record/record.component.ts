import {Component, OnInit, ViewChild} from '@angular/core';
import { QuestionListComponent } from '../list/question.list.component'
@Component({
  selector: 'app-record',
  templateUrl: 'record.component.html',
  styleUrls: ['record.component.css']
})
export class RecordComponent implements OnInit {
  private contacts:Array<any>;

  @ViewChild(QuestionListComponent) contactCollect:QuestionListComponent;

  constructor() { }

  ngOnInit() {
    this.contacts = [
      {name:'张  三  ',tel:'13100000000'},
      {name:'李  四',tel:'13100000000'},
      {name:'王二   ',tel:'13100000000'},
      {name:'黑五',tel:'13100000000'},
      {name:'白六',tel:'13100000000'},
      {name:'小七',tel:'13100000000'},
      {name:'丈八',tel:'13100000000'},
      {name:'蛇九',tel:'13100000000'},
      {name:'赌十',tel:'13100000000'},
    ]

  }

  viewChildClick(){
    this.contactCollect.conllect()
  }


}
