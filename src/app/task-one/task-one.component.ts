import { Component, Input, OnInit } from '@angular/core';
import { page } from '../page-one/page';
import { page2 } from '../row-two/row-two';
import { taskpage } from './data';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss']
})
export class TaskOneComponent implements OnInit {

// pageoneData=page
// pagetwoData=page2;
test="daddada"
data=taskpage
  constructor() { }

  ngOnInit(): void {
  }

  toggleFields(fieldIndex:number){
    this.data[fieldIndex].infoList.forEach(infoItem => {
      infoItem.isEditable = !infoItem.isEditable;
    })
  }
}


