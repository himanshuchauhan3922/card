import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowOneComponent } from './row-one.component';



@NgModule({
  declarations: [
    RowOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RowOneComponent
  ]
})
export class RowOneModule { }
