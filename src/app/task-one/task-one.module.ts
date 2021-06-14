import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskOneComponent } from './task-one.component';
import { RowOneModule } from '../row-one/row-one.module';




@NgModule({
  declarations: [
    TaskOneComponent
  ],
  imports: [
    CommonModule,
    RowOneModule

  ],
  exports:[
    TaskOneComponent
  ]
})
export class TaskOneModule { }
