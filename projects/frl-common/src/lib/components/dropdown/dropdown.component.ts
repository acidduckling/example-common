import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RegisterWidget } from '../widget-registry';

@RegisterWidget('dropdown')
@Component({
  selector: 'frl-dropdown',
  templateUrl: './dropdown.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent implements OnInit {
  options = ['option 1', 'option 2', 'option 3', 'option 4'];

  constructor() {}

  ngOnInit() {}
}
