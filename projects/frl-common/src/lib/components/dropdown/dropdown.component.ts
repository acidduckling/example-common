import { Component, OnInit } from '@angular/core';
import { RegisterWidget } from '../../decorators/register-widget';

@RegisterWidget('dropdown')
@Component({
  selector: 'frl-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  options = [
    'option 1',
    'option 2',
    'option 3',
    'option 4',
  ]

  constructor() { }

  ngOnInit() {
  }

}
