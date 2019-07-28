import { Component, OnInit } from '@angular/core';
import { RegisterWidget } from '../../decorators/register-widget';

@RegisterWidget('list')
@Component({
  selector: 'frl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items = [
    'Item 1',
    'Item 2',
    'Item 3',
  ]

  constructor() { }

  ngOnInit() {
  }

}
