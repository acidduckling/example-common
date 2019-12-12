import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { WIDGET_REGISTRY } from '../decorators/register-widget';

@Injectable()
export class DynamicComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadWidget(widgetName: string, widgetHost: ViewContainerRef) {
    const widget = WIDGET_REGISTRY.get(widgetName);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget);
    widgetHost.clear();
    widgetHost.createComponent(componentFactory);
  }

}
