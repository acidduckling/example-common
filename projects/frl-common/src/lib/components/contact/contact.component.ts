import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contacts-list/contacts-list.component';

@Component({
  selector: 'frl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;

  constructor() {}

  ngOnInit() {}
}
