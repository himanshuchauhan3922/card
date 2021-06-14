import { Component, OnInit } from '@angular/core';
import { page } from './page';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
data = page
  constructor() { }

  ngOnInit(): void {
  }

}
