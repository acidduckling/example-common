import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { DynamicComponentService } from 'frl-common';

@Component({
  selector: 'frl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frl-lodge';
  currentWidget: string;

  @ViewChild('widgetHost', { read: ViewContainerRef }) widgetHost: ViewContainerRef;

  constructor(private dynamicComponent: DynamicComponentService) { }

  ngOnInit(): void {
    this.loadComponent('list');
  }

  loadComponent(componentName: string): void {
    this.currentWidget = componentName;
    this.dynamicComponent.loadWidget(componentName, this.widgetHost);
  }

}
