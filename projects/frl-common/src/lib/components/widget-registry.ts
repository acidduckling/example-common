import { Type } from '@angular/core';

export const WIDGET_REGISTRY = new Map<string, Type<any>>();

export function RegisterWidget(componentName: string) {
    return (target: Type<any>) => {
        componentName = componentName.replace(/Component$/g, '').toLowerCase();
        WIDGET_REGISTRY.set(componentName, target);
    };
}
