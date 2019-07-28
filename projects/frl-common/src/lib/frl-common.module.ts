import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ListComponent } from './components/list/list.component';
import { DynamicComponentService } from './services/dynamic-component.service';
import { Environment } from './model/environment.interface';
import { ENVIRONMENT } from './app.tokens';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [DropdownComponent, ListComponent],
  imports: [CommonModule, HttpClientModule],
  entryComponents: [DropdownComponent, ListComponent],
  providers: [DynamicComponentService, ConfigService],
  exports: [DropdownComponent, ListComponent],
})
export class FrlCommonModule {
  static forRoot(environment: Environment): ModuleWithProviders {
    return {
      ngModule: FrlCommonModule,
      providers: [{ provide: ENVIRONMENT, useValue: environment }],
    };
  }
}
