import {Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges,ChangeDetectionStrategy} from '@angular/core';


@Component({
  selector: 'app-ng-select',
  templateUrl: 'ng-select.component.html',
  styleUrls: ['ng-select.component.css'],
})

export default class NgSelectComponent implements OnInit {
  private openMenu:boolean = false;
  private defaultText:any;

  @Input() optionInfo:any = {};
  @Input() defaultValue:any;
  @Output() select = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    this.defaultText = this.defaultValue
  }

  ngOnChanges(changes:SimpleChange){
    console.log(changes['optionInfo'])
  }

  open(){
    this.openMenu = !this.openMenu
  }

  selectV(item){

    this.defaultText = item.name;
    this.openMenu = !this.openMenu;
    this.select.emit(item)

  }

}
