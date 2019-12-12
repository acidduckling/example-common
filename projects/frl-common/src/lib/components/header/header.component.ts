import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'frl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() homePath = '/';
  showDropdown = false;

  constructor() { }

  ngOnInit() {
  }

}
