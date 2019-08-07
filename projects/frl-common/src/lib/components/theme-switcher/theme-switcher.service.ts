import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Theme } from './theme.type';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  private themeMapping: { [key: string]: string } = {
    a: 'theme-a.css',
    b: 'theme-b.css',
  };

  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadTheme(theme: Theme) {
    const path = this.themeMapping[theme];
    const { document } = this;

    if (!document) return;

    let style = document.head.querySelectorAll(
      'link[href*="theme-"]',
    )[0] as HTMLLinkElement;

    if (!style) {
      style = this.createStyleLinkElement();
      style = document.head.appendChild(style);
    }

    style.href = path;
  }

  private createStyleLinkElement(): HTMLLinkElement {
    const style = document.createElement('link') as HTMLLinkElement;
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.appendChild(document.createTextNode(''));
    return style;
  }
}
