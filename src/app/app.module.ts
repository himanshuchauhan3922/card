import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';

import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import { TemplateModule } from './template/template.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageOneModule } from './page-one/page-one.module';
import { TaskOneModule } from './task-one/task-one.module';
import { RowOneModule } from './row-one/row-one.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';








@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    CarouselModule,
    TemplateModule,
    FormsModule,
    NgbModule,
    PageOneModule,
    TaskOneModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
