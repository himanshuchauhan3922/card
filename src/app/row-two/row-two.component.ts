import { Component, OnInit } from '@angular/core';
import { page2 } from './row-two';

@Component({
  selector: 'app-row-two',
  templateUrl: './row-two.component.html',
  styleUrls: ['./row-two.component.scss']
})
export class RowTwoComponent implements OnInit {
data=page2
  constructor() { }

  ngOnInit(): void {
  }

}
