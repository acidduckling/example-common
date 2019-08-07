import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { ThemeSwitcherService } from './theme-switcher.service';

@NgModule({
  declarations: [ThemeSwitcherComponent],
  imports: [CommonModule],
  providers: [ThemeSwitcherService],
  exports: [ThemeSwitcherComponent],
})
export class ThemeSwitcherModule {}
