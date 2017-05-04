import { Component, OnInit } from '@angular/core';

import { AccordionConfig } from 'ng2-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), {closeOthers: false});
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [{provide: AccordionConfig, useFactory: getAccordionConfig}]
})
export class AboutComponent implements OnInit {

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };


  constructor() { }

  ngOnInit() {

  }

}
