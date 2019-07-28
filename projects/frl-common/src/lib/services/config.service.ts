import { Injectable, Inject } from '@angular/core';
import { Environment } from '../model/environment.interface';
import { ENVIRONMENT } from '../app.tokens';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(@Inject(ENVIRONMENT) public env: Environment) {}
}
