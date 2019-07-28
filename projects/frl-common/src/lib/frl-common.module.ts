import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ListComponent } from './components/list/list.component';
import { DynamicComponentService } from './services/dynamic-component.service';
import { Environment } from './model/environment.interface';
import { ENVIRONMENT } from './app.tokens';
import { ConfigService } from './services/config.service';
import { GridComponent } from './components/grid/grid.component';
import { GridColumnDirective } from './components/grid/grid-column.directive';

@NgModule({
  declarations: [DropdownComponent, ListComponent, GridComponent, GridColumnDirective],
  imports: [CommonModule, HttpClientModule],
  entryComponents: [DropdownComponent, ListComponent],
  providers: [DynamicComponentService, ConfigService],
  exports: [DropdownComponent, ListComponent, GridComponent, GridColumnDirective],
})
export class FrlCommonModule {
  static forRoot(environment: Environment): ModuleWithProviders {
    return {
      ngModule: FrlCommonModule,
      providers: [{ provide: ENVIRONMENT, useValue: environment }],
    };
  }
}
