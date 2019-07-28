import { Component, ViewChild, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { DynamicComponentService } from '@frl/common/services/dynamic-component.service';
import { ApiService } from '@frl/common/services/api/api.service';
import { Lodgement } from '@frl/common/model/lodgement.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'frl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frl-lodge';
  currentWidget: string;

  lodgements: Lodgement[];

  subs: Subscription[] = [];

  gridData = [
    { col1: 'hahaha', col2: 'COL 2', col3: 'COL 3' },
    { col1: 'R2_hahaha', col2: 'R2_COL 2', col3: 'R2_COL 3' },
    { col1: 'R3_hahaha', col2: 'R3_COL 2', col3: 'R3_COL 3' },
  ];

  @ViewChild('widgetHost', { read: ViewContainerRef, static: true }) widgetHost: ViewContainerRef;

  constructor(private dynamicComponent: DynamicComponentService, private api: ApiService) {}

  ngOnInit(): void {
    this.loadComponent('list');
    this.subs.push(
      this.api.lodgements$.subscribe(lodgements => {
        this.lodgements = lodgements;
      }),
    );
  }

  loadComponent(componentName: string): void {
    this.currentWidget = componentName;
    this.dynamicComponent.loadWidget(componentName, this.widgetHost);
  }

  ngOnDestroy():void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
