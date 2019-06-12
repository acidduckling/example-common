import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ListComponent } from './components/list/list.component';
import { DynamicComponentService } from './services/dynamic-component.service';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { TextboxComponent } from './components/textbox/textbox.component';


@NgModule({
  declarations: [DropdownComponent, ListComponent, ContactsListComponent, ContactComponent, TextboxComponent],
  imports: [CommonModule, FormsModule],
  entryComponents: [DropdownComponent, ListComponent],
  providers: [
    DynamicComponentService
  ],
  exports: [DropdownComponent, ListComponent, ContactsListComponent, ContactComponent, TextboxComponent]
})
export class FrlCommonModule { }
