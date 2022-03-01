import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly _config: ConfigService) {}

  get name(): string {
    return this._config.get<string>('app.name');
  }
  get env(): string {
    return this._config.get<string>('app.env');
  }
  get port(): number {
    return Number(this._config.get<number>('app.port'));
  }
  get swaggerAllowed(): boolean {
    return this._config.get<boolean>('app.swaggerAllowed') == true
      ? true
      : false;
  }
}
