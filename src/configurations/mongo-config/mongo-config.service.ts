import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoConfigService {
  constructor(private readonly _config: ConfigService) {}

  get uri(): string {
    return this._config.get<string>('mongo.uri');
  }
}
