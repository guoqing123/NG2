import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule , RequestOptions ,Http} from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

//ng2-bootstrap
import { CarouselModule } from 'ng2-bootstrap/carousel';

//服务
import { selectList } from './pipe/selectList'
import { HttpInterceptor } from './service/http-interceptor'
import { HttpInterceptorBackend } from './service/http-interceptor-backend'
import { httpFactory } from './service/http-factory'


//依赖组件
import { AppComponent } from './app.component';//主组件
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question/list/question.list.component'

import { rootRouterConfig } from './app.routes';

let rootRouterModule:ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);

//依赖的模块
import { SharedModule } from './shared/shared.module';
import { RecordComponent } from './question/record/record.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    QuestionComponent,
    RecordComponent,
    QuestionListComponent,
    selectList,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    rootRouterModule,
    CarouselModule,
    SharedModule,
  ],
  providers: [
    HttpInterceptor,HttpInterceptorBackend,
    {
      provide:Http,useFactory:httpFactory,deps:[HttpInterceptorBackend,RequestOptions]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
