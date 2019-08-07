import { NgModule } from '@angular/core';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ListComponent } from './components/list/list.component';
import { DynamicComponentService } from './services/dynamic-component.service';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherModule } from './components/theme-switcher/theme-switcher.module';

@NgModule({
  declarations: [DropdownComponent, ListComponent],
  imports: [CommonModule, ThemeSwitcherModule],
  entryComponents: [DropdownComponent, ListComponent],
  providers: [DynamicComponentService],
  exports: [DropdownComponent, ListComponent, ThemeSwitcherModule],
})
export class FrlCommonModule {}
