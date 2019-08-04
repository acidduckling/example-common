import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ENVIRONMENT } from './app.tokens';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { GridColumnDirective } from './components/grid/grid-column.directive';
import { GridComponent } from './components/grid/grid.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { Environment } from './model/environment.interface';
import { ConfigService } from './services/config.service';
import { DynamicComponentService } from './services/dynamic-component.service';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [DropdownComponent, ListComponent, GridComponent, GridColumnDirective, HeaderComponent, NavComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  entryComponents: [DropdownComponent, ListComponent],
  providers: [DynamicComponentService, ConfigService],
  exports: [DropdownComponent, ListComponent, GridComponent, GridColumnDirective, HeaderComponent],
})
export class FrlCommonModule {
  static forRoot(environment: Environment): ModuleWithProviders {
    return {
      ngModule: FrlCommonModule,
      providers: [{ provide: ENVIRONMENT, useValue: environment }],
    };
  }
}
