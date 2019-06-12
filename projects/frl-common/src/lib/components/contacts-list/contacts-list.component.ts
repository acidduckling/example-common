import { Component, OnInit, Input } from '@angular/core';

export interface Contact {
  name: string;
  email: string;
}

@Component({
  selector: 'frl-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  @Input() contacts: Contact[];

  constructor() {}

  ngOnInit() {}
}
