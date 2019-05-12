import { NgModule } from '@angular/core';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ListComponent } from './components/list/list.component';
import { DynamicComponentService } from './services/dynamic-component.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [DropdownComponent, ListComponent],
  imports: [CommonModule],
  entryComponents: [DropdownComponent, ListComponent],
  providers: [
    DynamicComponentService
  ],
  exports: [DropdownComponent, ListComponent]
})
export class FrlCommonModule { }
