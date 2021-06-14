import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowTwoComponent } from './row-two.component';



@NgModule({
  declarations: [
    RowTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RowTwoComponent
  ]
})
export class RowTwoModule { }
