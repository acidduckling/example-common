import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RegisterWidget } from '../widget-registry';

@RegisterWidget('list')
@Component({
  selector: 'frl-list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  items = ['Item 1', 'Item 2', 'Item 3'];

  constructor() {}

  ngOnInit() {}
}
