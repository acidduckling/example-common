import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Theme } from './theme.type';
import { ThemeSwitcherService } from './theme-switcher.service';

@Component({
  selector: 'frl-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ThemeSwitcherComponent implements OnInit {
  @Input() currentTheme: Theme = 'a';

  constructor(private service: ThemeSwitcherService) {}

  changeTheme(theme: Theme) {
    this.currentTheme = theme;
    this.service.loadTheme(theme);
  }

  ngOnInit() {}
}
