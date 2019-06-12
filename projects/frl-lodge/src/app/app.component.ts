import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { DynamicComponentService } from 'frl-common';
import { Contact } from 'frl-common/src/lib/components/contacts-list/contacts-list.component';

@Component({
  selector: 'frl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frl-lodge';
  currentWidget: string;

  contacts = [
    {
      name: 'user 1',
      email: 'email@blah.com'
    },
    {
      name: 'user 2',
      email: 'email@blah.com'
    },
    {
      name: 'user 3',
      email: 'email@blah.com'
    },
  ] as Contact[];

  @ViewChild('widgetHost', { read: ViewContainerRef })
  widgetHost: ViewContainerRef;

  constructor(private dynamicComponent: DynamicComponentService) {}

  ngOnInit(): void {
    // this.loadComponent('list');
  }

  loadComponent(componentName: string): void {
    this.currentWidget = componentName;
    this.dynamicComponent.loadWidget(componentName, this.widgetHost);
  }
}
