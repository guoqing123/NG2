import { Component, OnInit } from '@angular/core';

import { CarouselConfig } from 'ng2-bootstrap/carousel';


@Component({
  moduleId:module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 3000, noPause: true}}],
})
export class HomeComponent implements OnInit {

  slides:Array<any> = [];
  slogan:Array<any> = [
    '免费简约的问卷系统',
    '简单 好用 在线调查网站',
    '多方式创建编辑问卷',
    '多方式创建编辑问卷',
  ];

  constructor() {}

  ngOnInit() {
    for (let i = 0 ;i < this.slogan.length; i++){
      this.addSlide(i)
    }
  }

  addSlide(idx:number){
    this.slides.push({
      image:`../../assets/img/banner${idx}.jpg`,
      text:this.slogan[idx]
    })
  }

}
