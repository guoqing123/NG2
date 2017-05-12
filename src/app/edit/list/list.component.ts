import {
  Component, OnInit, Renderer, ViewChild, ElementRef, trigger, state, style, transition, animate,
  keyframes
} from '@angular/core';

@Component({
  selector: 'edit-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  queries:{
    input:new ViewChild('input')
  },
  animations:[
    trigger('buttonStatus',[
      state('on',style({
        color:'#0f2',
        transform:'scale(1.2)'
      })),
      state('off',style({
        color:'#000',
        transform:'scale(1)'
      })),
      transition('on => off',animate('300ms ease-in')),
      transition('off => on',animate('300ms ease-in'))
    ]),
  ]
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
  input:ElementRef = null;
  private status:string = 'on';

  constructor(private _render:Renderer) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this._render.invokeElementMethod(this.input.nativeElement,'focus')
  }

  selectCallBack($event){
    this.defaultValue = $event.name
    console.log($event)

  }

  toggleStatus(){
    this.status == 'on' ? this.status = 'off' : this.status = 'on'
  }

}
