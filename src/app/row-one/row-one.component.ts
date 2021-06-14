import { Component, Input, OnInit } from '@angular/core';
import { NgbPanelToggle } from '@ng-bootstrap/ng-bootstrap';
import { pageRow } from './row';

@Component({
  selector: 'app-row-one',
  templateUrl: './row-one.component.html',
  styleUrls: ['./row-one.component.scss'],
})
export class RowOneComponent implements OnInit {
  @Input()
  item: any;

  @Input()
  isEditable: boolean = false;

  constructor() {}

  ngOnInit(): void {}
//   clickToShowDivOrInput(){
// this.isEditable = !this.isEditable;
//   }
}
