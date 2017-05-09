import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {
  defaultValue:any = '123';
  private optionInfo:any = [
    {name:'a',id:1},
    {name:'b',id:2},
    {name:'c',id:3},
    {name:'d',id:4},
    {name:'e',id:5},
  ]

  constructor() {}

  ngOnInit() {
  }

  selectCallBack($event){
    this.defaultValue = $event.name
    console.log($event)

  }

}
