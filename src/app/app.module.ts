import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

//ng2-bootstrap
import { AlertModule } from 'ng2-bootstrap/alert';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { AccordionModule } from 'ng2-bootstrap/accordion';
// import { SharedModule } from '../shared/shared.module';


//依赖组件
import { AppComponent } from './app.component';//主组件
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { rootRouterConfig } from './app.routes';
let rootRouterModule:ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    rootRouterModule,
    // SharedModule,
    CarouselModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
